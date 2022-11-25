const express = require("express");
const router =express.Router()          //express ka fN router run karenge
const mongoose = require("mongoose");
const POST = mongoose.model("POST");

//route
router.post("/createPost",(req,res)=>{
    const{title,body}=req.body;
    if(!title|| !body){
        return res.status(422).json({error:"please add all the fields"})

    }
    res.json("ok")
    
   
})

module.exports= router;