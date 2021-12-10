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
  supplier2.name = "GiveMeMore";
  supplier2.email = "info@gmm.nl";
  supplier2.address = "verdestraat 34";
  supplier2.zipcode = "3454 BR";
  supplier2.place = "Arnhem";
  supplier2.contactperson = "Ronald";
  supplier2.phonenumber = "06 - 73261134";
  allsuppliers.push(supplier1);
  allsuppliers.push(supplier2);
  return allsuppliers;
}
const {createPool} = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "recycle-shoes",
  connectionLimit: 10,
});

console.log("hoi");
const express = require('express');
const cors = require('cors')
const app = express();
//const bodyParser = require('body-parser');

app.use(express.urlencoded());
app.use(express.json());  
app.listen(5000, ()=> console.log('hier gaan we'));
app.use(cors())
app.use(express.static('public'));
// api design principles  app.get(/suppliers) of suppliersbyid  
// rest api design principles
// body parser enablen

async function  getAllSuppliers (){
  pool.query(`select * from schip`, (e,r,f)=>{
    if(e){
      return console.log(e);
    }
    return console.log(r);
  })
}
async function go(){
  return await getAllSuppliers();
}

app.get('/getallsuppliers',(request, response)=>{
  console.log("getallesuppliers");
  let allsuppliers = getProefData();
  response.json(allsuppliers);
});


app.get('/test',(request, response)=>{
  console.log("test");
  pool.query('select * from schip', function (err, recordset) {
            
    if (err) console.log(err)

    // send records as a response
    response.send(recordset);
  });
});

app.get('/getallsuppliersdb',(request, response)=>{
  console.log("test");
  pool.query('select * from supplier', function (err, recordset) {
            
    if (err) console.log(err)

    // send records as a response
    response.send(recordset);
  });
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

app.post('/suppliertoevoegen',(req, res)=>{
    console.log("post is gelukt"+req.body.voornaam);
    // validatie  a-z 
    // prepared statement                 parameterisen
     pool.query(`insert into supplier(id, name, email, address, zipcode, place, contactperson, phonenumber, delivery) VALUES (NULL, '${req.body.name}', '${req.body.email}','${req.body.address}', '${req.body.zipcode}', '${req.body.place}', '${req.body.contactperson}', '${req.body.phonenumber}', '${req.body.delivery}')`, (e,r,f)=>{
       if(e){
         return console.log(e);
       }
       return console.log(r);
   })
   res.send("yes");
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