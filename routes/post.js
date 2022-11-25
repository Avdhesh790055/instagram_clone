const mongoose= require("mongoose");
const { post } = require("./auth");
const {ObjectId} = mongoose.Schema.Types

const postSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },
    body:{

        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"no photo"

    },
    postedBy:{
        type:ObjectId,
        ref: "USER"

    }

})
mongoose.model("POST",postSchema)