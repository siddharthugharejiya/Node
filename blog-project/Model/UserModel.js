const mongoose = require('mongoose')
const Userschema = mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const BlogModel= mongoose.model("Blog",Userschema)
module.exports=BlogModel