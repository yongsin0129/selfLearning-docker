FROM node:16.19.0-slim

# 變更工作目錄到指定位置 , 若無此目錄則創建一個
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source ,  copy '當前目錄全部內容' 到 'image當前的工作目錄'
COPY . .

# container port
EXPOSE 8080

# execute when container run
CMD [ "node", "server.js" ]