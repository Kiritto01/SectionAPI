const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const mysql2 = require("mysql2");

const dataBase = mysql2.createConnection({
  host: "139.177.182.197",
  user: "admin",
  password: "Loleczek4321*",
  database: "article",
});

dataBase.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM article;";
  dataBase.query(sqlSelect, (err, result) => {
    console.log(result);
  });
});

app.get("/", (req, res) => {
  res.send("Nwwwweewfff");
});

app.listen(8000, () => {
  console.log("Api ON");
});
