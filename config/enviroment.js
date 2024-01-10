require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pwd = process.env.DB_PWD;

module.exports = {
    db_host,
    db_port, 
    db_name, 
    db_user,
    db_pwd
}