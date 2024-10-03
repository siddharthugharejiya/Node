

const mongoose = require('mongoose')


const userSchema = ({
    username:String,
    email:String,
    password:String
})
const usermodel = mongoose.model('products',userSchema)
module.exports=usermodel