const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_HOSTNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/', (req,res) => 
{
    return res.json(`Connected to resturant-utsyn api`);
});

app.get('/reservasjoner', (req, res)=>{
    const sql = "SELECT * FROM Reservasjoner";
    db.query(sql, (err, data)=>
    {
        if(err){ res.send("falied"); return res.json(err)};
        return res.json({"message" : "approved"});
    })
    res.send("approved")
});

app.post('/reservasjon', function(req, res){
    const sql = `INSERT INTO Reservasjoner (Dato, Antall_gjester, Fornavn, Etternavn, Telefonnummer, Epost, ExtraInfo) VALUES (?)`;
    const values = [
        req.body.Dato,
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

app.listen(5000, ()=>
{
    console.log("listening");
});