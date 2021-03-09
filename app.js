const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening to port http://localhost:${port}/home`);
});
