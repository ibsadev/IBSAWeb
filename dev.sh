#!/bin/bash

# Branch not specified
if [ -z "$1" ];then
    echo "Please specify a branch to run on."
    echo "Usage: ./dev.sh <branch_name>"
    exit 1
fi

# Fetch and get all branches in case any new created
git fetch &> /dev/null

# Branch does not exist
if [ ! `git branch --list $1` ];then
   echo "Branch $1 does not exist. Please specify an existing branch."
   exit 1
fi

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
    echo "No merge conflicts with submaster, merging submaster..."
fi

# Merge with submaster
if git merge-base --is-ancestor origin/$1 submaster;
then
    git checkout submaster
    git pull 
    git checkout $1
    git merge submaster
fi

# Kill all ports and then run npm run dev
lsof -P | grep ':8000' | awk '{print $2}' | xargs kill -9
lsof -P | grep ':3000' | awk '{print $2}' | xargs kill -9
npm run dev