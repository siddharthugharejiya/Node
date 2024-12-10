const mongoose = require('mongoose')
const UserSChema = mongoose.Schema({
    username : {type : String , require : true},
    email : {type : String , require : true},
    password : {type : String , require : true},
    secretkey : {type : String },
    role : {type : String, default : "user" ,enum : ["user","admin"]}
})
const UserModel = mongoose.model("User",UserSChema)
module.exports=UserModel