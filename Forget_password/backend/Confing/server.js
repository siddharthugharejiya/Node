const mongoose = require('mongoose')
const Connect = async() =>{
    await mongoose.connect("mongodb+srv://multiera95:95@passport.maflc.mongodb.net/?retryWrites=true&w=majority&appName=passportd")
    console.log("Sever is connected")
}
module.exports=Connect