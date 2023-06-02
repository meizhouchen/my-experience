 # rebase
 
 # merge
 (1) 执行命令: git checkout auto_test   //切换分支到auto_test

 (2) 执行命令: git merge local_auto_test   //merge之前local_auto_test内容到本地auto_test分支

 (3) 执行命令: git push origin auto_test   //将本地auto_test分支推送到远程服务器。
 
 
 ## git删除某个分支的方法：
 1、利用“git branch --delete dev”命令删除本地分支；
 2、利用“git push origin --delete branch”命令删除远程分支；
 3、利用“git branch --delete --remotes”命令删除追踪分支。
 
 [cheery pick](https://blog.csdn.net/GBS20200720/article/details/123840359)