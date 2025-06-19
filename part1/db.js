const mysql = require('mysql2');

const db = mysql.createPool({
    host: '/var/ru',
    user: '127.0.0.1',
    password: 'mypassword',
    database: 'textbook_marketplace'
});

module.exports = db;