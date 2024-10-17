const mongoose = require('mongoose')
const Connect = async() =>{
  await mongoose.connect("mongodb+srv://multiera95:95@userdata.inz7c.mongodb.net/?retryWrites=true&w=majority&appName=Userdata")
  console.log("mongodb data successfully connected")
}
module.exports=Connect