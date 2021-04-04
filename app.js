const express = require('express');
const bodyparser = require('body-parser');

const app = new express();

const port = 8000;

app.use(bodyparser.json());

app.listen(process.env.port || port, () => {
    console.log('running on ' + port);
});




require('./app_server/routes/routeManager')(app);