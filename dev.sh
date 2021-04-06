#!/bin/bash

# Branch not specified
if [ -z "$1" ];then
    echo "Please specify a branch to run on."
    echo "Usage: \"./dev.sh <branch_name>\""
    exit 1
fi

# Fetch and get all branches in case any new created
git fetch &> /dev/null
git remote update &> /dev/null

# Branch does not exist
branchExists=$(git ls-remote --heads origin $1)
if [ "$branchExists" = "" ];then
   echo "Branch \"$1\" does not exist. Please specify an existing branch."
   exit 1
fi

# Checkout to make sure we make a local HEAD
git checkout submaster &> /dev/null
git pull
git checkout $1 &> /dev/null

# Check for merge conflicts
mergeID=$(git merge-base origin/$1 submaster)
if [ "$mergeID" = "" ];then
    #in case the two have no common ancestor (unlikely but can happen), use the empty tree as the merge base
    mergeID=4b825dc642cb6eb9a060e54bf8d69288fbee4904
fi
mergeStatus=$(git merge-tree $mergeID origin/$1 submaster | xargs | grep -oe '<<<<<<<.*=======.*>>>>>>>')
if [ ! "$mergeStatus" = "" ];then
    echo "There is a merge conflict with submaster. Please handle merge conflicts before developing further."
    exit 2
else
    echo "No merge conflicts with submaster."
fi

# Merge with submaster if behind
branchLog=$(git log origin/$1..submaster)
if [ ! "$branchLog" = "" ];
then
    echo "Merging submaster..."
    git checkout submaster
    git pull 
    git checkout $1
    git merge submaster
    git push
fi

# Kill all ports and then run npm run dev
echo "Killing current port 3000 and 8000 processes..."
lsof -P | grep ':8000' | awk '{print $2}' | xargs kill -9
lsof -P | grep ':3000' | awk '{print $2}' | xargs kill -9
echo "Starting server..."
npm run dev