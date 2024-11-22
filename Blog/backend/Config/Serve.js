const mongoose = require('mongoose')
const Connect = async() =>{
       await mongoose.connect("mongodb+srv://multiera95:95@blog.o4xq8.mongodb.net/?retryWrites=true&w=majority&appName=blog")
       console.log("Server is connected")
}
module.exports=Connect