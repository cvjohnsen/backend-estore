// Declare mongoose
const mongoose = require("mongoose");

async function mongooseConnect() {
  await mongoose.connect(process.env.MONGO_DB_URI);
}

module.exports = mongooseConnect;
