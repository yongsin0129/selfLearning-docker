# 說明如何使用 fly.io 提供的 fly postgreSQL

官方文件　： [Fly Postgres · Fly Docs](https://fly.io/docs/postgres/)

建立好後會得到以下訊息

```bash
Postgres cluster red-rain-9302 created
  Username:    postgres
  Password:    <password>
  Hostname:    red-rain-9302.internal
  Flycast:     fdaa:1:c4ac:0:1::2
  Proxy port:  5432
  Postgres port:  5433
  Connection string: postgres://postgres:<password>@red-rain-9302.flycast:5432

Save your credentials in a secure place -- you won't be able to see them again!

Connect to postgres
Any app within the yongsin0129 organization can connect to this Postgres using the above connection string

Now that you've set up Postgres, here's what you need to understand: https://fly.io/docs/postgres/getting-started/what-you-should-know/
```

官方說這個並不是一個 db , 而是一個 app !

## 連線方式

所以一開始並不能直接用外部的 APP 去連結這個 db , 例如用 pg4 直接連 Connection string: postgres://postgres:<password>@red-rain-9302.flycast:5432

不過可以參考說明文件，它有提供其他的連線方式

官網 : [Connecting to Fly Postgres · Fly Docs](https://fly.io/docs/postgres/connecting/)

### 第一種方式 : \***\*Connect With flyctl\*\***

1. 可用以下指令直接打開 psql

```bash
fly postgres connect -a <postgres-app-name>
```

1. 可用以下指令打開遠端連線

```bash
fly proxy 5433 -a <postgres-app-name>

// Proxying local port 5433 to remote [red-rain-9302.internal]:5433 出現這段就表示成功
// 可用 psql postgres://postgres:<password>@localhost:5432 在 local 端打開 psql
// 也可以在 pg4 打開 , host name : local
```

### 第二種方式 : \***\*Connect From a Fly App (最簡單)\*\***

任何自已名下的 fly app 都可以直連 fly postgreSQL

Fly Postgres is an app that belongs to your Fly organization.

The `hostname` in this string resolves to an internal IPv6 address that can be reached by any of your apps that live in the same [IPv6 private network](https://fly.io/docs/reference/private-networking/).

```bash
postgres://{username}:{password}@{hostname}:{port}/{database}?options
```

### 第三種方式 : \***\*External Connections\*\***

使用 `fly ips allocate-v4 --app <pg-app-name>` 要轉成 IP4 的時候，提示要付費 !!!
