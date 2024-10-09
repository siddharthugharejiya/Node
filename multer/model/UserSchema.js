const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
      image : String
})
const UserModel = mongoose.model('data',UserSchema)