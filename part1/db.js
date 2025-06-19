const mysql = require('mysql2');

const pool = mysql.createPool({
    socketPath: '/var/run/mysqld/mysqld.sock',
    host: '127.0.0.1',
    user: 'root',
    password: 'mypassword',
    database: 'textbook_marketplace'
});

const db = mysql.createPool.promise();

module.exports = db;