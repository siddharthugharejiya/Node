const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    image:String,
    title:String,
    description:String
})
const UserModel = mongoose.model("Blog",UserSchema)
module.exports=UserModel