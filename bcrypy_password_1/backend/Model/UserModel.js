const mongoose = require('mongoose')
const userSChema = mongoose.Schema({
    username:String,
    email:String,
    password:String
}) 
const UserModel = mongoose.model("pass",userSChema)
module.exports=UserModel