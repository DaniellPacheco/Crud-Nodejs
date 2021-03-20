const mysql = require('mysql');

// Config MYSQL
const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    pass: "",
    port: 3306
});

module.exports = sql;