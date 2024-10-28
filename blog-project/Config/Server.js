const mongoose = require('mongoose')
const Connect = async() =>{
   await mongoose.connect('mongodb+srv://multiera95:95@blog.najk7.mongodb.net/?retryWrites=true&w=majority&appName=blog')
   console.log("Mongoose connected successfully")
   

}
module.exports=Connect