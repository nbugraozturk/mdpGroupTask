const mysql = require('mysql2');

const port = process.env.PORT || 8000;

if (port === 8000) {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '8080',
        user: 'deneme1',
        password: 'denemepass',
        database: 'production'
    });
}

// eslint-disable-next-line block-scoped-var
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to db');
});

// eslint-disable-next-line block-scoped-var
module.exports = connection;
