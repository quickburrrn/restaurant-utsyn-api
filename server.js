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

app.post('/reservasjon', function(req, res){
    const sql = `INSERT INTO Reservasjoner (Dato, Tid, Antall_gjester, Fornavn, Etternavn, Telefonnummer, Epost, ExtraInfo) VALUES (?)`;
    const values = [
        req.body.Dato,
        req.body.Tid,
        req.body.Antall_gjester,
        req.body.Fornavn,
        req.body.Etternavn,
        req.body.Telefonnummer,
        req.body.Epost,
        req.body.ExtraInfo
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