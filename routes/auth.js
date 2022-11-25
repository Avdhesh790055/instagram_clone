const express = require("express");
const router =express.Router()          //express ka fN router run karenge
const mongoose = require("mongoose");

const USER =mongoose.model("USER");

const bcrypt= require("bcrypt");

router.get('/',(req,res)=>{
    
    res.send("hello")

})

router.post("/signup",(req,res)=>{
 
   const {name,userName,email,password}= req.body;

   if(!name || !email || !userName || !password){
    return res.status(422).json({error:"please add all the fields"})
   }
   USER.findOne({ $or:[{email:email},{userName:userName}]}).then((savedUser)=>{
    if(savedUser){
        return res.status(422).json({error:"User already exist with this email or userName"})
    }  
    bcrypt.hash(password,15).then((hashedPassword)=>{

        const user =new USER({                  //object  of  USER
            name,
            email,
            userName,
            password:hashedPassword
           })
           user.save()
           .then(user =>{res.json({message:"Registered successfully"})})
           .catch(err =>{console.log(err)})
           
        
        })
       })       //USER  is model name                                  
    

})
router.post("/signin",(req,res)=>{
    const {email,password} =req.body;
    if(!email || !password){
        return res.status(422).json({error:"please add email and password"})
    }
    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return(res.status(422).json({error:"Invalid email"}))
        }

        console.log(savedUser);
        bcrypt.compare(password,savedUser.password).then((match)=>{
            if(match){
                return res.status(200).json({message:"signed in successfully"})
            }else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
        .catch(error=>console.log("error"))
    })
})

    
  
module.exports= router;


