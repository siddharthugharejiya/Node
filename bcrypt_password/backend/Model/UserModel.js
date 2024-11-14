const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    Username : String,
    email : String,
    password : String
})
const UserModel = mongoose.model("bcrypt",UserSchema)
module.exports=UserModel