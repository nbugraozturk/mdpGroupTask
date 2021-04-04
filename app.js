const express = require('express');

const app = new express();

const port = 8000;



app.listen(process.env.port || port, () => {
    console.log('running on ' + port);
});


const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '8080',
    user: 'deneme1',
    password: 'denemepass',
    database: 'user_deneme2'
});


let sqlSorgusuCreate = `CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    product_serial_number VARCHAR(30) NOT NULL DEFAULT 'SEZER',
    CONSTRAINT PK_id PRIMARY KEY(product_id)
  );`;

let sqlSorgusu = `SHOW TABLES;`
/*connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    connection.query(sqlSorgusu, (err, results, fields) => {
        if (err) throw err.message;
        for (let tablo of results) {
            console.log(Object.values(tablo).toString());
        }

        //console.log('Table Created');
    });

});*/


require('./app_server/routes/routeManager')(app);