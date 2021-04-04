var db = require('../model/dbconnection');


let addProductsSQL = `INSERT INTO products VALUES(NULL, 'Samsung Laptop', '67890');`;

module.exports.addProduct = (req, res) => {


    var params = req.url.split("?");
    var properties = params[1].split("&");


    let addBrandSQL = 'INSERT INTO brands VALUES(' + properties[0].split('=')[1] + ',' + "'" + properties[1].split('=')[1].toString() + "'" + ')';
    let addCategorySQL = 'INSERT INTO categories VALUES(' + properties[2].split('=')[1] + ',' + "'" + properties[3].split('=')[1].toString() + "'" + ')';
    let addProductSQL = 'INSERT INTO products VALUES(' + properties[4].split('=')[1] + ',' + "'" + properties[5].split('=')[1].toString() + "'" + ',' + properties[0].split('=')[1] +
        ',' + properties[2].split('=')[1] + ',' + properties[6].split('=')[1] + ',' + properties[7].split('=')[1] + ')';



    db.query(addBrandSQL, (err, results) => {
        try {
            if (err) throw err.message;
        } catch {
            console.log("Brand Allready Exists")
        }
    })


    db.query(addCategorySQL, (err, results) => {
        try {
            if (err) throw err.message;
        } catch {
            console.log("Category Allready Exists")
        }
    })


    db.query(addProductSQL, (err, results) => {
        try {
            if (err) throw err.message;
        } catch {
            console.log("Product Allready Exists")
            res.send('Product Allready Exists');
        }

        if (!err)
            res.send('Product Added');
    })

    console.log("add product post");
}
