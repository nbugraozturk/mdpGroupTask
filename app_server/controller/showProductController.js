const db = require('../model/dbconnection');


module.exports.showProduct = (req, res) => {
    const showProductSQL = 'Select * From products WHERE product_id = ?';

    db.query(showProductSQL, [req.params.product_ID], (err, rows) => {
        if (err) console.log(err);
        res.send(rows);
    });
};
