const mysql = require('mysql2');

const db = mysql.createPool({
    host: '/var/run/mysqld/mysqld.sock',
    user: 'root',
    password: 'mypassword',
    database: 'textbook_marketplace'
});

module.exports = db;