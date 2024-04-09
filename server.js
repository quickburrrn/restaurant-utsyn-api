const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant_utsyn_database'
});

app.get('/', (req,res) => 
{
    return res.json(`Connected to resturant-utsyn api`);
});

app.get('/reservasjoner', (req, res)=>{
    const sql = "SELECT * FROM reservasjoner";
    db.query(sql, (err, data)=>
    {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.post('/bord',function(req, res){
    const sql = "INSERT INTO bord(`BordID`, `Kapasitet`) VALUES (?)";
    const values = [
        req.body.BordID,
        req.body.Kapasitet
    ];
    db.query(sql, [values], (err, data) =>
    {
        if(err) return res.json(err);
        return res.json(data);
    });
});

// app.get('/bord', (req, res)=>{
//     const values = [
//         req.BordID = "3",
//         req.Kapasitet = "3"
//     ]
//     return res.json(req.body)
// });

app.post('/reservasjon', function(req, res){
    const sql = `INSERT INTO Reservasjoner (Dato, Tid, Antall_gjester, Fornavn, Etternavn, Telefonnummer, Epost, BordID) VALUES (?)`;
    const values = [
        req.body.Dato,
        req.body.Tid,
        req.body.Antall_gjester,
        req.body.Fornavn,
        req.body.Etternavn,
        req.body.Telefonnummer,
        req.body.Epost,
        req.body.BordID
    ];
    db.query(sql, [values], (err, data) =>
    {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8001, ()=>
{
    console.log("listening");
});