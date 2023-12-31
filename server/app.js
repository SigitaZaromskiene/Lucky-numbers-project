const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

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

app.get("/users", (req, res) => {
  const sql = `
  SELECT id, name, role
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
  const role = "manager";
  const session = uuidv4();
  const sql = `
  INSERT INTO users (session, name, psw, role)
  VALUES (?, ?, ?, ?)

  `;

  con.query(
    sql,
    [session, req.body.name, md5(req.body.psw), role],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows) {
        res.cookie("usersSession", session);
        res.json({
          status: "ok",
          name: req.body.name,
        });
      } else {
        res.json({
          status: "error",
        });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const sessionId = uuidv4();

  const sql = `
        UPDATE users
        SET session = ?
        WHERE name = ? AND psw = ?
    `;

  con.query(
    sql,
    [sessionId, req.body.name, md5(req.body.psw)],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows) {
        res.cookie("usersSession", sessionId);
        res.json({
          status: "ok",
          name: req.body.name,
        });
      } else {
        res.json({
          status: "error",
        });
      }
    }
  );
});

app.get("/login", (req, res) => {
  const sql = `
        SELECT name, role
        FROM users
        WHERE session = ?
    `;
  con.query(sql, [req.cookies.usersSession || ""], (err, result) => {
    if (err) throw err;

    if (result.length) {
      res.json({
        status: "ok",
        name: result[0].name,
        role: result[0].role,
      });
    } else {
      res.json({
        status: "error",
      });
    }
  });
});

app.post("/logout", (req, res) => {
  res.cookie("usersSession", "");
  res.json({
    status: "logout",
  });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});
