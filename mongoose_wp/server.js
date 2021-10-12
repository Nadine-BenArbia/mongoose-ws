// require 
const express = require ('express');
const connectDB = require('./config/connectDB');
require('dotenv').config()
// express methods 
const app = express();

// call fuction : database
// local module  
connectDB();
// person: api middelwear
app.use("/api/person",require ("./router/person"))



// port 
const PORT= process.env.PORT ;

//create server 
app.listen(PORT,(err) =>{ 
  err? console.log(err) : 
  console.log(" server is running ",PORT)
})