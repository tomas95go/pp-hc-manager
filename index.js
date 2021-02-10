const express = require("express");
const haircutRouter = require("./routes/haircut-crud/haircut-crud");
const bodyParser = require("body-parser");
const Haircut = require("./config/db");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "pug");

console.log("Index:", Haircut);

app.use(bodyParser.json());
app.use("/", haircutRouter);

app.listen(port, () => {
  console.log(`Example app listening to port http://localhost:${port}/home`);
});
