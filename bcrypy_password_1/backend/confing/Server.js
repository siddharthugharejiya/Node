const mongoose = require('mongoose')
const server = async() =>{
   await mongoose.connect("mongodb+srv://multiera95:95@bcrypt.rw2ca.mongodb.net/?retryWrites=true&w=majority&appName=bcrypt")
   console.log("server is connected");
   
}
module.exports=server