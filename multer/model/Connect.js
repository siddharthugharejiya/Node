const mongoose = require('mongoose')

const coll = async() =>{
   await mongoose.connect('mongodb://127.0.0.1/multer')
   console.log("Server connected successfully ")
}
module.exports=coll