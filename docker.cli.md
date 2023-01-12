## 清空
`docker system prune -f` (清空所有非運行的 container 及 cache)
`docker image prune -a` (清空所有 image)

## docker container
`docker container ls` (列出所有正在運行的 container )
`docker container ls -a` (列出所有正在運行 及 非運行的 container )

`docker start <container_name>` (運行一個停止的 container)
`docker container run [OPTIONS] IMAGE` (讀取 image , 運行一個新的 container)

`docker container stop <name or Id>` (停止一個運行中的 container) (優雅退出，適用於線上產品)
`docker container kill <name or Id>` (kill一個運行中的 container) (立即退出)
`docker container restart  <name or Id>` (重啟 container)
`docker container pause  <name or Id>` (暫停)
`docker container unpause  <name or Id>` (取消暫停)
`docker container rm <name or Id>` (kill container)

## docker image   
`docker build . -t <image name>` (創建一個新的 image)  
`docker image ls` (列出所有 image )
`docker image rm` (remove image)


## docker hub
登录到镜像仓库   
`$ docker login`   
`$ docker login localhost:8080`  

从镜像仓库注销   
`$ docker logout`  
`$ docker logout localhost:8080`  

搜索镜像   
`$ docker search nginx`  
`$ docker search nginx --stars=3 --no-trunc busybox`  

拉取镜像   
`$ docker pull nginx`  
`$ docker pull eon01/nginx localhost:5000/myadmin/nginx`  
 
推送镜像 (這邊需要注意 -t 開頭一定要是自已的 name  ex : yongsin0129 , 不然會報錯)   
`$ docker push eon01/nginx`  
`$ docker push eon01/nginx localhost:5000/myadmin/nginx`  
