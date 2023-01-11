## step 1 using dockerfile to build Image
`docker build . -t <image name>`

. : 目前的工作資料夾  
-t : tag 給這個 image 一個 tag

## step2 run image
`docker run -p 49160:8080 -d <image name or Id>`

-p : 將 本地的 port 對應到 container 的 port  
-d : detach mode , 將會在後台運行，而非前台 ( default : attach mode )


