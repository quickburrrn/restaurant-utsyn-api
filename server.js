const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant_utsyn_database'
})

app.get('/', (req,res) => 
{
    return res.json("Velkomen til Resturant-utsyn databse ");
});

app.get('/reservasjoner', (req, res)=>{
    const sql = "SELECT * FROM reservasjoner";
    db.query(sql, (err, data)=>
    {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/addbord', (req, res)=>{
    [BordId, kapasitet] = req;
    const sql = "INSERT INTO bord(BordID, Kapasitet) VALUES ("+BordId+", "+kapasitet+")";
    db.query(sql, (err, data)=>
    {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/addreservasjon', (req, res)=>{
    const sql = "SELECT * FROM reservasjoner";
    db.query(sql, (err, data)=>
    {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8001, ()=>
{
    console.log("listening");
});