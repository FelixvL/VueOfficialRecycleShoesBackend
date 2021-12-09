// run dit programma met nodemon index.js

console.log("hoi");
const express = require('express');
const cors = require('cors')
const app = express();
app.listen(5000, ()=> console.log('hier gaan we'));
app.use(cors())
app.use(express.static('public'));

app.get('/todos',(request, response)=>{
  console.log("todos");
  response.json(
    [
      {
        "id":"1",
        "value":"we gaan beginnen"
      },
      {
        "id":"2",
        "value":"wandelend"
      },
    ]
    );
});

app.post('/todos',(req, res)=>{
    console.log("post is gelukt");
    // pool.query(`insert into schip(id, lengte, naam, kapitein) VALUE (NULL, 100, 'die','daar')`, (e,r,f)=>{
    //   if(e){
    //     return console.log(e);
    //   }
    //   return console.log(r);
    // })
  });

const {createPool} = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "abcd",
  connectionLimit: 10,
});

pool.query(`select * from schip`, (e,r,f)=>{
  if(e){
    return console.log(e);
  }
  return console.log(r);
})

pool.query(`insert into schip(id, lengte, naam, kapitein) VALUE (NULL, 100, 'die','daar')`, (e,r,f)=>{
  if(e){
    return console.log(e);
  }
  return console.log(r);
})