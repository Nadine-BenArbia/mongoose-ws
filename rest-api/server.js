const express=require("express");
const connectDB = require('./config/connectDB');
require('dotenv').config()
// express methods 
const app = express();

const time = require("./middleware/time");


// local module  
connectDB();
// user: api 
app.use("/api/User",require ("./Router/User"))


// server part
//port 
const PORT= process.env.PORT ;

//server
app.listen(Port,(err) =>
err? console.log(err) : console.log(`server is running on ${Port}`)
);