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

//eksempel på querry
app.get('/bruker', (req, res)=>{
    //det var så langt jeg kom
})

app.listen(8001, ()=>
{
    console.log("listening");
});