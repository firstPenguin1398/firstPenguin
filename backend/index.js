const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1939inin!!",
  database: "firstpenguin",
});

app.get("/", (req, res) => {
  res.send("Hello! hahahahah");
});

app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM freeboard;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = req.body.date;
  const author = req.body.author;
  const sqlQuery =
    "INSERT INTO freeboard (title, content, date, author) VALUES (?,?,?,?)";
  db.query(sqlQuery, [title, content, date, author], (err, result) => {
    res.send("insert success!");
  });
});

app.post("/api/delete", (req, res) => {
  const id = req.body.id;
  const sqlQuery = "DELETE FROM freeboard WHERE id = ?";
  db.query(sqlQuery, id, (err, result) => {
    res.send("delete success!");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
