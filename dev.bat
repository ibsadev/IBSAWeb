@ECHO OFF

@Rem Branch not specified
if "%~1" == "" GOTO NOARGUMENT

@Rem Fetch and get all branches in case any new created
CALL git fetch > nul 2>&1
CALL git remote update > nul 2>&1

@Rem Branch does not exist
for /f %%i in ('git ls-remote --heads origin %1') do set BranchExists=%%i
if "%BranchExists%" == "" GOTO BADBRANCH

@Rem Checkout to make sure we make a local HEAD
CALL git checkout submaster > nul 2>&1
CALL git pull
CALL git checkout %1 > nul 2>&1

@Rem Check for merge conflicts
for /f %%i in ('git merge-base origin/%1 submaster') do set mergeID=%%i
@Rem in case the two have no common ancestor (unlikely but can happen), use the empty tree as the merge base
if "%mergeID%" == "" SET mergeID=4b825dc642cb6eb9a060e54bf8d69288fbee4904
for /f %%i in ('git merge-tree %mergeID% origin/%1 submaster') do set mergeStatus=%%i
if not "%mergeStatus%" == "" GOTO MERGECONFLICT

@Rem Merge with submaster if behind
for /f %%i in ('git log origin/%1..submaster') do set BranchLog=%%i
if not "%BranchLog%" == "" GOTO MERGE 

GOTO DONE

@Rem Branch not specified
:NOARGUMENT
ECHO Please specify a branch to run on.
ECHO Usage: ".\dev.bat <branch_name>"
GOTO BADARGUMENT

@Rem Branch does not exist
:BADBRANCH
ECHO Branch "%1" does not exist. Please specify an existing branch.
GOTO BADARGUMENT

@Rem Bad argument exit routine
:BADARGUMENT
EXIT /B 1

@Rem Deal with merge conflict
:MERGECONFLICT
ECHO There is a merge conflict with submaster. Please handle merge conflicts before developing further.
EXIT /B 2

@Rem Merge with submaster if behind
:MERGE
ECHO Merging submaster...
CALL git checkout submaster
CALL git pull 
CALL git checkout %1
CALL git merge submaster
CALL git push
GOTO DONE

:DONE
ECHO Killing current port 3000 and 8000 processes...
FOR /F "tokens=4 delims= " %%P IN ('netstat -a -n -o ^| findstr :3000') DO TaskKill.exe /PID %%P
FOR /F "tokens=4 delims= " %%P IN ('netstat -a -n -o ^| findstr :8000') DO TaskKill.exe /PID %%P
ECHO Starting server...
npm run dev
PAUSE