const mysql = require('mysql2');

const db = mysql.createPool({
code: 'ER_ACCESS_DENIED_ERROR',
  errno: 1045,
  sql: undefined,
  sqlState: '28000',
  sqlMessage: "Access denied for user 'root'@'localhost' (using password: YES)"
}

    host: '127.0.0.1',
    user: 'root',
    password: 'mypassword',
    database: 'textbook_marketplace'
});

module.exports = db;