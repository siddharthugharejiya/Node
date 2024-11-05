const mongoose = require('mongoose')
const Signup = mongoose.Schema({
    username : String,
    email : String,
    password : String
})
const SignupModel = mongoose.model("Signup",Signup)
module.exports=SignupModel