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

app.get("/NewItemsProductData/:id", (req, res) => {
  const OneProductItems = NewItemsProductData.find((item) => {
    return item.Title === req.params.id;
  });
  res.send(OneProductItems);
});

app.get("/SmallerSliderProductData/:id", (req, res) => {
  const OneProduct = SmallerSliderProductData.find((item) => {
    return item.Title === req.params.id;
  });
  res.send(OneProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));
