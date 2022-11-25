const express = require("express");  // import express
const app = express();               //variable app & express ko run kar diya
const mongoose = require("mongoose");

const cors= require("cors");
app.use(cors())

require ("./modelschema")
require("./routes/post");
const USER = mongoose.model("USER");

app.use(express.json());              //using json as a type of data,because every thing in mongodb is stored in json  format

app.use(require("./routes/auth"))            // app.use k andarmiddle ware fN run hota hai
app.use(require("./routes/createPost"))



app.listen(5000,(req,res)=>{
console.log("server is running on port   5000");
 
})


mongoose.connect("mongodb://localhost:27017/Instaclone", //add connection  to database 

{
  useNewUrlParser: true,       //mongodb  uses these properties  as parameter which is true
  useUnifiedTopology: true     //to  connect  with database .
 
});


const db =mongoose.connection ;        
db.on("error",console.error.bind(console,"connection error: "));
db.once("open", function() 
{
  console.log("Connected successfully to mongodb .");
})
