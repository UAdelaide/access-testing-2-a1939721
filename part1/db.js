const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password_for_marketplace',
    database: 'bookMarketplace'
});

module.exports = pool.promise();