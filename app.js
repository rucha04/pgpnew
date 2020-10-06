const mongoosedb = require('./config')
mongoosedb()
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


const PORT = process.env.PORT || 3000;




app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
