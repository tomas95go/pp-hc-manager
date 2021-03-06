const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening to port http://localhost:${port}/home`);
});
