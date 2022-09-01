const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sheng123Q',
  database: 'test1',
})

module.exports = db