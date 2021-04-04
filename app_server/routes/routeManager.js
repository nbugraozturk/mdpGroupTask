const addProductController = require('../controller/addProductController');

const showAllProductsController = require('../controller/showAllProductsController');
const showProductController = require('../controller/showProductController');
const deleteProductController = require('../controller/deleteProductController');
const updateProductController = require('../controller/updateProductController');
const addCartController = require('../controller/addCartController');


module.exports = (app) => {
    //add product
    app.route('/addProduct')
        .post(addProductController.addProduct);

    //show all products details
    app.route('/showAllProducts')
        .get(showAllProductsController.showAllProducts);

    //show a product details
    app.route('/showProduct/:product_ID')
        .get(showProductController.showProduct);

    //delete a product
    app.route('/deleteProduct/:product_ID')
        .delete(deleteProductController.deleteProduct);

    //update a product
    app.route('/updateProduct/:product_ID')
        .put(updateProductController.updateProduct);

    app.route('/addCart/:product_ID')
        .post(addCartController.addCart);
};
