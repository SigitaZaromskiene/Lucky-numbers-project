const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const mysql = require("mysql");

const app = express();
const port = 3003;
// app.use(express.json({ limit: "10mb" }));
// app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysqlnewproject",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});

app.get("/users", (req, res) => {
  const sql = `
  SELECT id, name
  FROM users
 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/numbers", (req, res) => {
  const sql = `
  SELECT id, number
  FROM numbers
 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/numbers", (req, res) => {
  const sql = `
  INSERT INTO numbers (number)
  VALUES (?)

  `;

  con.query(sql, [req.body.number], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.delete("/numbers/:id", (req, res) => {
  const sql = `
        DELETE FROM numbers
        WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.put("/numbers/:id", (req, res) => {
  const sql = `
        UPDATE numbers
        SET number = ? 
        WHERE id = ?
    `;
  params = [req.body.number, req.params.id];

  con.query(sql, params, (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.delete("/users/:id", (req, res) => {
  const sql = `
        DELETE FROM users
        WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.post("/register", (req, res) => {
  const sql = `
  INSERT INTO users (name, psw)
  VALUES (?, ?)

  `;

  con.query(sql, [req.body.name, req.body.psw], (err) => {
    if (err) throw err;
    res.json({});
  });
});
