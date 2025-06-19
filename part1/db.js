const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    database: 'textbook_marketplace'
});

const db = this.getConnection.promise();

module.exports = pool;