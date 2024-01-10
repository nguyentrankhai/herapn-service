// const mysql = require('mysql2');

// // Thông tin kết nối
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'shop',
// });

// // Kết nối đến MySQL
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// module.exports = connection;


const { Sequelize } = require('sequelize');
const enviroment = require("./enviroment");
const {db_host: host, db_user: user, db_pwd: pwd, db_port: port, db_name: name } = enviroment

const sequelize = new Sequelize(name, user, pwd, {
  host: host,
  dialect: 'mysql',
  port: port
});

module.exports = sequelize;