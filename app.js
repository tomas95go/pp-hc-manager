const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening to port http://localhost:${port}/home`);
});
