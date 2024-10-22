const mongoose = require('mongoose')
const UserSchema = {
    username:String,
    email:String,
    password:String
}
const UserModel = mongoose.model("user",UserSchema)
module.exports= UserModel