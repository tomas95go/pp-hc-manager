const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
const port = 3000;

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening to port http://localhost:${port}/home`);
    console.log(`Process env, node_env: ${process.env.NODE_ENV}`);
});