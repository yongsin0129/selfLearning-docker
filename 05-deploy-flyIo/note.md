使用 01-hello-docker的 image 嘗試部屬到 fly.io

### step
1. 安裝 Flyctl <br>
官網教學: https://fly.io/docs/hands-on/install-flyctl/

2. fly auth signup or signin 來登入

3. 登記信用卡資訊

4. fly launch 執行後就會開始一系列的選項，並可以直接 deploy

5. 可使用 fly status 確認目前狀態

6. 如果是較複雜的專案，可在 fly.toml 裡面設定 App Secrets、Volumes

7. secrets 設定: 
<br>
fly secrets set 環境變數的key=<value>
<br>
fly secrets list 可查看目前的變數

8. Volumes 設定:
<br>
fly volumes create <volume-name>

9. fly.toml 設定: (可參考網路他人專案)
<br>
https://github.com/over-engineering-run/over-engineering/blob/v0.0.1/fly.toml


### 踩坑記錄
+ Windows PowerShell 中安裝了 flyctl，但在 VS Code 的 Bash 終端中無法找到 flyctl。
> 這是因為 PowerShell 和 Bash 是不同的終端機，它們的環境變數和路徑可能不同。
<br>
<br>
VS Code 的 Bash 終端中執行以下命令：echo $PATH，會顯示當前終端的 PATH 環境變數。確認您安裝的 flyctl 是否位於該路徑之一。
<br>
<br>
如果 flyctl 沒有包含在您的 PATH 中，您可以將其添加到 PATH 中。在 Bash 終端中，可以使用以下命令將 flyctl 所在的目錄添加到 PATH 中 export PATH=$PATH:/path/to/flyctl/directory
<br>
<br>
請將 /path/to/flyctl/directory 替換為 flyctl 的實際安裝路徑。該命令將在當前終端中添加 flyctl 的路徑，並使其可以從終端中運行。
<br>
<br>
在 Windows PowerShell 中查看安裝路徑可以使用 where 或 Get-Command 命令。 ex : where flyctl , Get-Command flyctl
<br>
<br>
最後在 git bash 中執行
<br>
export PATH=$PATH:/c/Users/yongsin/.fly/bin
<br>
<br>
成功將 fly 加入到 bash 的環境變數之中




