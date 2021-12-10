// run dit programma met nodemon helemaalschoon.js
// Dit gedeelte is altijd nodig VVVVVVVV
const {createPool} = require('mysql');
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "recycle-shoes",
  connectionLimit: 10,
});
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.urlencoded());
app.use(express.json());  
app.listen(5000, ()=> console.log('hier gaan we'));
app.use(cors())
app.use(express.static('public'));
// Dit gedeelte is altijd nodig ^^^^^^^^^^

// Een get statement met een recordset terug
app.get('/getallsuppliersdb',(request, response)=>{
  pool.query('select * from supplier', function (err, recordset) {
    if (err){ 
      console.log(err)
    }
    response.send(recordset);
  });
});

// Een post-statement met een korte bevestiging
app.post('/suppliertoevoegen',(req, res)=>{
  console.log("test dat post lukt: "+req.body.voornaam);
  pool.query(`insert into supplier(id, name, email, address, zipcode, place, contactperson, phonenumber, delivery) VALUES (NULL, '${req.body.name}', '${req.body.email}','${req.body.address}', '${req.body.zipcode}', '${req.body.place}', '${req.body.contactperson}', '${req.body.phonenumber}', '${req.body.delivery}')`, (e,r,f)=>{
    if(e){
      return console.log(e);
    }
    return console.log(r);
  })
  res.send("supplier toegevoegd");
});
