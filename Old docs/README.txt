To initilize the repo on your own machine so you can fetch code and push commits:

Make a folder for the project and open up a terminal, go to the folder which you just created 

1) git init
2) git remote add upstream https://github.com/GabrielAddai/DoLittle.git -- to initialize it to the github repo
3) git fetch upstream -- to fetch any new code/content that someone else pushed
4) git checkout -b <item> upstream/<item>

BEFORE DOING ANYTHING MAKE SURE YOU FECTH THE CURRENT UPDATES FROM THE MASTER BRANCH
git checkout <branch name>
git pull origin master

when you've done your work do

1) git add .
2) git commit -m "<whatever update>"
3) git push -u origin master
