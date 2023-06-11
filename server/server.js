import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ovscrud'
})

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello");
  });
  
  app.get("/users", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  app.post("/users", (req, res) => {
    const q = "INSERT INTO users(`name`, `numripersonal`, `email`, `password`) VALUES (?)";
  
    const values = [
      req.body.name,
      req.body.numripersonal,
      req.body.email,
      req.body.password,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const q = " DELETE FROM users WHERE id = ? ";
  
    db.query(q, [userId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.put("/users/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE users SET `name`= ?, `numripersonal`= ?, `email`= ?, `password`= ? WHERE id = ?";
  
    const values = [
      req.body.name,
      req.body.numripersonal,
      req.body.email,
      req.body.password,
    ];
  
    db.query(q, [...values,userId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(8081, () => {
    console.log("Running");
})