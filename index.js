// run dit programma met nodemon index.js
function getProefData(){
  let allsuppliers = [];
  let supplier1 = {};
  let supplier2 = {};
  supplier1.name = "BestOfShoes";
  supplier1.email = "info@bos.nl";
  supplier1.address = "bekelaan 14";
  supplier1.zipcode = "6622 GB";
  supplier1.place = "Utrecht";
  supplier1.contactperson = "Johan";
  supplier1.phonenumber = "06 - 65379212";
  supplier2.name = "BestOfShoes";
  supplier2.email = "info@bos.nl";
  supplier2.address = "bekelaan 14";
  supplier2.zipcode = "6622 GB";
  supplier2.place = "Utrecht";
  supplier2.contactperson = "Johan";
  supplier2.phonenumber = "06 - 65379212";
  allsuppliers.push(supplier1);
  allsuppliers.push(supplier2);
  return allsuppliers;
}
console.log("hoi");
const express = require('express');
const cors = require('cors')
const app = express();
app.listen(5000, ()=> console.log('hier gaan we'));
app.use(cors())
app.use(express.static('public'));





app.get('/getallsuppliers',(request, response)=>{
  console.log("getallesuppliers");
  let allsuppliers = getProefData();
  response.json(allsuppliers);
});

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
  database: "recycle-shoes",
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