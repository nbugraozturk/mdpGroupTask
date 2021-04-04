var addProductController = require('../controller/addProductController');
var showProductsController = require('../controller/showProductsController');


module.exports = (app) => {
    //add product
    app.route('/addProduct')
        .post(addProductController.addProduct);

    //show all products
    app.route('/showProducts')
        .get(showProductsController.showProducts);
};