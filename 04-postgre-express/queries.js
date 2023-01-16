const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dbuser',
  host: 'pg', //# 直接放上 compose 裡面的名字，这个名字也是内部 bridge网络可以使用的 DNS name
  database: 'postgres',
  password: 'dbpass',
  port: 5432,   
  // 上面的 host 如果是 Docker 環境下，不用加上 port 也可以執行
  // 但如果有加上 port 的話，記得是 container 裡面的 port 5432 ，不是 expose 的 5433
})

// UrlLocal = "mongodb://admin:password@localhost:27017"
// UrlDocker = "mongodb://admin:password@mongodb"

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = { getUsers }