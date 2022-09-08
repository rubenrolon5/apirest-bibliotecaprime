const mysql = require('mysql2/promise');

const conexion = mysql.createPool({
    host:'127.0.0.1',
    user:'toor',
    database: 'biblioteca',
    password:'1qa2ws3ed',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = conexion;