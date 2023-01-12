## step 1 pull image 
`docker pull postgres:alpine3.17` (選擇較輕量的 alpine 做練習)  

## step 2 using container to run this image
```
docker run --name docker-postgreSQL -e POSTGRES_USER=dbuser -e POSTGRES_PASSWORD=dbpass -p 5433:5432 -v //e/homePG/seal/data:/var/lib/postgresql/data -d postgres:alpine3.17
```

參數說明:

--name 給定 container 指定名字  
-e 給定 env 做為 container 使用 (P.S. arg 是 build image 使用的參數)  
-e 直接給定 POSTGRES 一個 userName , userPassword  
-p port mapping ，若原本電腦有安裝 POSTGRES 則 5432 會被佔用，需要改為其他的 PORT ex:5433
-v (bind mount本地路徑):(container內的路徑)
-d detach mode (在後台執行)
postgres:alpine3.17 指定要 run 的 image

## step 3 POSTGRES URL  
postgres://dbuser:dbpass@localhost:5433
    
    
<br>
<br>
<br>
<br>


### 補充 : 開放任何連線 No auth mode
若將 POSTGRES_HOST_AUTH_METHOD 設為 trust，則不須 POSTGRES_PASSWORD ex: -e POSTGRES_HOST_AUTH_METHOD=trust

### 採坑紀錄
bind mount 本地路徑 如果用 C槽的 Program file 資料夾，會有權限的問題    
container內的路徑 一定要看 database 的官方文檔，確認它們資料存放的確切位置，這樣 mount 才會有意義，不然只會是空資料夾