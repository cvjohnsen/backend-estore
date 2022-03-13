const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 6000;

app.use(bodyParser.json());

app.use("/", (req, res) => {
  res.status(200).json({ message: "API IS UP" });
});

app.listen(PORT, () => {
  console.log("SERVER UP!!!");
});
