const mongoose = require('mongoose')
const connect = async() =>{
      await mongoose.connect("mongodb+srv://multiera95:95@loginsignup.koedu.mongodb.net/?retryWrites=true&w=majority&appName=loginsignup")
      console.log("Mongoose Connected")
}
module.exports=connect