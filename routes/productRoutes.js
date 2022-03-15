const express = require("express");
const Product = require("../schemas/productSchema");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  Product.find((error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json({ product_list: result });
  });
});

productRouter.post("/", (req, res) => {
  const products = req.body;
  products.name = true;
  products.description = true;
  products.price = true;
  products.quantity = true;

  Product.create(products, (error, result) => {
    if (error) {
      res.status(400).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(400).json({ message: error.message });
    }
    res.status(201).json({ product_item: result });
  });
});

productRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  Product.findById(id, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json({ product: result });
  });
});

productRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;

  Product.findByIdAndUpdate(id, update, { new: true }, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(202).json({ product_item: result });
  });
});

productRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id, (error, result) => {
    if (error) {
      res.status(404).json({ message: error.message });
    }
    res.status(204).json({ status: "deleted" });
  });
});

module.exports = productRouter;
