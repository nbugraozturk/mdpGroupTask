var db = require('../model/dbconnection');


module.exports.deleteProduct = (req, res) => {

    let deleteProductSQL = "DELETE From products WHERE product_id = ?";

    db.query(deleteProductSQL, [req.params.product_ID], (err, rows, fields) => {
        if (err) console.log(err);
        res.send("Product Deleted");
    })
}