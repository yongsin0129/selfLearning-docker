`docker-compose down && docker-compose -f docker-compose.yml up -d`

因為 compose 裡面有寫 build , 所以直接 compose 就會 build 工作目錄下的 Dockerfile (express-demo)

# 採坑記錄
兩個 container 要互相連接時，需要在用一個 network 環境下，另外指定 service name 即可，不需要 port 。

ex : 
UrlLocal = "mongodb://admin:password@localhost:27017"
UrlDocker = "mongodb://admin:password@pg"  // 這邊的 pg 是 compose 裡面 service name
