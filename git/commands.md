###                                                                   COMANDS

`git init` --> Powers your folder to be managed by git, and initialises a new empty repository .It also creates .git folder that has all relevent versions of your project.

`Working area` --> There can be bunch of files that are not currently handled by git. It means that changes done or to be done in those files are not managed by git yet. A file which is in working area  is considerd to be not in the staging area. When you do 'git status' ans we can see bunch of 'untracked files' then these are actually called to be in the working area.

`Staging area` --> It tells us what all files are going to be our next version that we will create.Staging area is the place where git knows what changes will be done from the last version to next version.

`Repository area` --> This area is actually contains the details of all the previos registered version. And the files in this area, git already manages them and knows there version history.

### Commit
Commit is a paticular version of the project. It captures a snapshot of project's staged

* git add "<filename>" --> moves file from working area to staging area

* git rm --cached <filename> --> moves file back from staging area to   working area

* git commit --> Registers staging changes to commit and now the file is a part of the repository area

* git log --> List down all the commits of the repository. If you want to exit out of git log prompt press "q"

* git restore <filename> --> This can be useful, if we did some dirty piece of code and now no more want it. Instead of deleting every change line by line, we can restore it or you can say restore last clean version of the file.

* git restore --staged <file> --> It removes file from staging area to the working area.This only works if changes are in your staging area

* git diff <id1> <id2> --> If you want to get the difference between two commits 

* git commit -m "<your commit message>" --> If we want to avoid opening like a text editor like vim/nano add commit message we can use the following command

* git remote --> lists down all the remote connections names

* Remote connection --> It helps you to link two git repositories for uploading and downloading changes from eech other.

* git remote add <name of remote> <link of remote> --> This command helps us to add a new limk to the rwmote repo and give a name to it

* git remote rm <name of remote> --> This command deletes a remote connection

