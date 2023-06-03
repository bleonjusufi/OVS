import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "usercrud"
})

app.get('/', (req, res) => {
    const sql = "SELECT * from Perdoruesit";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/Perdoruesit', (req, res) => {
    const sql = "INSERT into Perdoruesit (`fullName`, `nrPersonal`) VALUES (?)";
    const values = [
        req.body.fullName,
        req.body.nrPersonal
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * from Perdoruesit WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id],(err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE Perdoruesit SET `fullName`=?, `nrPersonal`=? WHERE ID = ?';
    const id = req.params.id;
    db.query(sql, [req.body.fullName, req.body.nrPersonal, id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM Perdoruesit WHERE ID=?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081, () => {    
    console.log("Listening");
})

