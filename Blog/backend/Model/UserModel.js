const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username : {type : String,default : null},
    email : {type : String,default : null},
    password : {type : String,default : null}
})
const UserModel = mongoose.model('blog',UserSchema)
module.exports = UserModel