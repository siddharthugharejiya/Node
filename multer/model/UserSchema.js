const mongoose = require('mongoose')

const UserSchema =  mongoose.Schema({
      email:String,
      pass:String,
      image:String
})
const UserModel = mongoose.model('data',UserSchema)
module.exports=UserModel