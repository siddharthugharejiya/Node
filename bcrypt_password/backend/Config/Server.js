const mongoose = require('mongoose')

const Connect = async()=>{
    
  await mongoose.connect("mongodb+srv://multiera95:95@passport.ujlv9.mongodb.net/bcrypt?retryWrites=true&w=majority&appName=passport")
  console.log("Server Is connected")
} 
module.exports=Connect