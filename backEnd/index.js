const express = require("express");
const cors = require("cors");
const app = express();
const NewItemsProductData = require("./NewItemsProductData");
const SmallerSliderProductData = require("./SmallerSliderProductData");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/NewItemsProductData", (req, res) => {
  res.send(NewItemsProductData);
});

app.get("/SmallerSliderProductData", (req, res) => {
  res.send(SmallerSliderProductData);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));