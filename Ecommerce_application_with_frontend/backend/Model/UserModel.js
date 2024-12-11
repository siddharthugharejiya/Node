const mongoose = require('mongoose')
const UserSChema = mongoose.Schema({
    username : {type : String , required : true},
    email : {type : String , required : true},
    password : {type : String , required : true},
    secretkey : {type : String },
    role : {type : String, default : "user" ,enum : ["user","admin"]}
})
const UserModel = mongoose.model("User",UserSChema)
module.exports=UserModel