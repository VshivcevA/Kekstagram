# Adjustment Management Guide 

 Support your repository updated. When the mentor accepts your Pulrekvest, he gets to the Academy’s repository, but not to your Fork. 

 #### 1. Do not commend anything yourself in `Master 'your repository 

 This will prevent you from gently update your repository, conflicts may arise. 

 #### 2. Before proceeding to a new task, update `master` 

 You can update your repository from the Academy repository as follows: 

 `` ` 
 # In your local copy, switch to Master branch 
 Git Checkout Master 

 # Take changes from the Academy repository¹ 
 Git Pull Academy Master 

 # Send Changes to your Fork at Hithabe 
 Git Push 
 `` ` 

 ¹ In `Academy` there should be a link to the Academy repository. If he is not there, add: 

 `` ` 
 Git Remote Add Academy {{sshurl}} 
 `` ` 

 When you updated `Master ', create a branch for a new task: 

 `` ` 
 Git Checkout -b Module2 -Task1 
 `` ` 

 `Module2-Task1`-this is the name of the branch. Under the description of each task in the intensity interface, the correct name of the branch will be indicated for you. 

 - 

 #### Is there a question? 

 Look [a collection of frequently asked questions on Git] (http://firstaidgit.ru).