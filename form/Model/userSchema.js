const mongoose = require("mongoose")
const Userschema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const Usemodel = mongoose.model("products",Userschema)
module.exports=Usemodel