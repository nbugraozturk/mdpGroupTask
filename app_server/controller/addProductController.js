var db = require('../model/dbconnection');


let addProductSQL = `INSERT INTO products VALUES(NULL, 'Samsung Laptop', '67890');`;

module.exports.addProduct = (req, res) => {




    db.query(addProductSQL, (err, results) => {
        if (err) throw err.message;
        res.send('Product Added');
    })
    console.log("add product post");
}
