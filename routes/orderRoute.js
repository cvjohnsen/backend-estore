const express = require("express");
const Order = require("../schemas/orderSchema");

const orderRouter = express.Router();

orderRouter.get("/", (req, res) => {
  Order.find((error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json({ order_list: result });
  });
});

orderRouter.post("/", (req, res) => {
  //orders,
  Order.create((error, result) => {
    if (error) {
      res.status(400).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(400).json({ message: error.message });
    }
    res.status(201).json({ order_item: result });
  });
});

orderRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  Order.findById(id, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json({ order: result });
  });
});

orderRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;

  Order.findByIdAndUpdate(id, update, { new: true }, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(202).json({ order_item: result });
  });
});

orderRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  Order.findByIdAndDelete(id, (error, result) => {
    if (error) {
      res.status(404).json({ message: error.message });
    }
    res.status(204).json({ status: "deleted" });
  });
});

module.exports = orderRouter;
