const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongooseConnect = require("./config");
const productRouter = require("./routes/productRoutes");
const morgan = require("morgan");
const cors = require("cors");

// Create app
const app = express();
//Configure the App
dotenv.config();

// MIDDLE WARES!!!
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(morgan("dev"));

// Routes
app.use("/product", productRouter);

// Create Port (add process.env.PORT)
const PORT = process.env.PORT || 6000;

//Base Route
app.use("/", (req, res) => {
  res.status(200).json({ message: "API IS UP" });
});

//Listen
app.listen(PORT, () => {
  console.log(PORT);
  mongooseConnect();
});
