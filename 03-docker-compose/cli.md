`docker-compose down && docker-compose -f docker-compose.yml up -d`

參數說明:
-f 指定 yaml 檔
-d 在後台執行

指令列表:  
docker-compose up 创建和启动容器
docker-compose up -d 以分离模式创建和启动容器
docker-compose down 停止和删除容器、网络、映像和卷
docker-compose logs 查看容器的输出
docker-compose restart 重启所有服务
docker-compose config 验证并查看 Compose 文件
docker-compose scale <service_name>=<replica> 为服务指定容器个数
docker-compose top 显示正在运行的进程
docker-compose run -rm -p 2022:22 web bash 启动 Web 服务并运行 bash 作为其命令，删除旧容器。

docker-compose build 构建所有服务的镜像 (需要在 compose 內有寫 build 及其參數 context ，就可以進行 build)
docker-compose pull 拉取 or 构建所有服务所需要镜像