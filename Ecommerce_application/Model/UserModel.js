const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username : {type : String , require:true},
    email : {type : String , require : true , unique : true},
    password : { type : String , require : true},
    role : {type : String , require : true , enum : ["user","admin"]}
})
const UserModel = mongoose.model("User",UserSchema)
module.exports =UserModel