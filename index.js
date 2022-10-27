

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var mysql = require('mysql');

app.use(bodyParser.json());

var conn = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : '',
 database : 'react-php-1'
});

conn.connect(function(err){
 if (err) throw err;
 console.log('connected');

});


//Add A New record
app.post("/api/create", (req,res) =>{
   let data = {name: req.body.name, location: req.body.location};

   let sql = "INSERT INTO `users` SET ?";
   let query = conn.query(sql,data,(err,result) =>{

     if (err) throw err;
     res.send(JSON.stringify({status:200, error:null, response:"New Record Added Successfully" }));
   });
});

//Show All records
app.get("/api/view", (req,res) =>{
 let sql = " SELECT * FROM users ";

 let query = conn.query(sql,(err,result) =>{

   if (err) throw err;
   res.send(JSON.stringify({status:200, error:null, response: result}));
 });
});


//Show Specific records
app.get("/api/view/:id", (req,res) =>{


  let sql = " SELECT * FROM users where id =" + req.params.id;
  
  let query = conn.query(sql,(err,result) =>{
 
    if (err) throw err;
    res.send(JSON.stringify({status:200, error:null, response: result}));
  });
 });


//Update Specific records
app.put("/api/update", (req,res) =>{
  
  let sql = "UPDATE users SET name ='" +req.body.name+"', location = '"+req.body.location+"' WHERE id="+req.body.id;
  
  let query = conn.query(sql,(err,result) =>{
 
    if (err) throw err;
    res.send(JSON.stringify({status:200, error:null, response:"Record Updated Successfully"}));
  });
 });



//Delete Specific records
app.delete("/api/delete/:id", (req,res) =>{


  let sql = "DELETE FROM `users` WHERE id = 5";
  
  let query = conn.query(sql,(err,result) =>{
 
    if (err) throw err;
    res.send(JSON.stringify({status:200, error:null, response:"Record Deleted Successfully"}));
  });
 });

const port = 7000;
app.listen(port, () => {
  console.log(`Our App Is Running at http://localhost:${port}`);
});