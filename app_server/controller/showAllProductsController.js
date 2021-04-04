


var db = require('../model/dbconnection');



module.exports.showAllProducts = (req, res) => {


    let pathname = req._parsedUrl.pathname.split('/');
    let section = pathname[1];

    var results = db.query('SELECT * from products', [section], function (error, results, fields) {
        if (error) {
            var apiResult = {};

            apiResult.meta = {
                table: section,
                type: "collection",
                total: 0
            }
            apiResult.data = [];
            res.json(apiResult);

        }

        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);
        var apiResult = {};

        apiResult.meta = {
            table: section,
            type: "collection",
            total: 1,
            total_entries: 0
        }

        apiResult.data = resultJson;

        res.json(apiResult);
    });
}
