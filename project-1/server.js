
const mongoose = require('mongoose')
const connect = async() =>{
         await mongoose.connect('mongodb://localhost:27017/bookstore')
         console.log("data connection successfully")

}
module.exports=connect