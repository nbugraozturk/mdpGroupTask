const db = require('../model/dbconnection');



module.exports.addCart = (req, res) => {


    var params = req.url.split("?");
    var orderID = params[1].split("&")[0].split("=")[1];
    //quantity de urlden 

    let addOrdersSQL = "INSERT INTO orders VALUES(" + "'" + orderID + "'" + ");";
    let addCartSQL = "INSERT INTO order_items ( product_id, product_name, brand_id, category_id, model_year, list_price) SELECT product_id, product_name, brand_id, category_id, model_year, list_price FROM products WHERE product_id = ?;"
    let addOrderIDtoOrderItems = 'INSERT INTO order_items (order_id) SELECT order_id FROM orders WHERE order_id = ' + orderID + ';';
    console.log(addOrderIDtoOrderItems);




    db.query(addOrdersSQL, (err, results) => {
        try {
            if (err) throw err.message;
        } catch {
            console.log(err.message + " 1");
        }
    });





    db.query(addCartSQL, [req.params.product_ID], (err, results) => {

        db.query(addOrderIDtoOrderItems, (err, results) => {
            try {
                if (err) throw err.message;
            } catch {
                console.log(err.message + " 2");
            }
        })



        try {
            if (err) throw err.message;
        } catch {
            console.log(err.message + " 3")
            res.send('Cannot Added to Cart');
        }

        if (!err)
            res.send('Product Added to Cart');
    })

    /*db.query(addOrderIDtoOrderItems, (err, results) => {
        try {
            if (err) throw err.message;
        } catch {
            console.log(err.message + " 2");
        }
    })*/

    console.log("add cart post");
}