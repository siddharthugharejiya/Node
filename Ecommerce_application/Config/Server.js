const mongoose = require('mongoose')
require('dotenv').config();
const Connected = async() =>{
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Server is connected")
}

module.exports=Connected