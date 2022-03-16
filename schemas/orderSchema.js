const mongoose = require("mongoose");

//One order many products
//Order address, phone, name
//Ref: "product"
const orderSchema = new mongoose.Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  name: { type: String, required: true },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],
});

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
