const db = require('../model/dbconnection');


module.exports.updateProduct = (req, res) => {
    //product_name ve list_price
    const selectProductSQL = 'Select product_name, list_price From products WHERE product_id = ?';
    const params = req.url.split('?');
    const newProductName = params[1].split('&')[0].split('=')[1];
    const newListPrice = params[1].split('&')[1].split('=')[1];
    // eslint-disable-next-line no-useless-concat
    // eslint-disable-next-line max-len
    const updateProductSQL = 'UPDATE products SET product_name = ' + "'" + newProductName + "'" + ', list_price = ' + "'" + newListPrice + "'" + ' Where product_id = ?';


    db.query(selectProductSQL, [req.params.product_ID], () => {
        db.query(updateProductSQL, [req.params.product_ID], (error) => {
            if (error) console.log(error);
            res.send(`Updated Successfully Product ${req.params.product_ID}`);
        });
    });
};

