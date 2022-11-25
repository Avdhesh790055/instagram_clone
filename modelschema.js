const mongoose = require("mongoose");              //import mongoose

const userSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true
    },
    userName: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    }

})                                                   // syntax
mongoose.model("USER",userSchema)                // mongoose.model me  wrap kardenge userSchema ko