const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views','./views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('layout/layout');
});

app.listen(port, () => {
    console.log(`Example app listening to port http://localhost:${port}`);
});