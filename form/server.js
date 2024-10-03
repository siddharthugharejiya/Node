const mongoose = require('mongoose')
const connect = async() =>{
         await mongoose.connect('mongodb://localhost:27017/e-commerce')
         console.log("data connection successfully")
}
module.exports=connect