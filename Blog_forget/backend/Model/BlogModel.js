const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
    title:String,
    image:String,
    description : String,
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
})
const BlogModel = mongoose.model("blogModel",Userschema)
module.exports=BlogModel