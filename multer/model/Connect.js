const mongoose = require('mongoose')

const coll = async() =>{
   await mongoose.connect('mongodb://127.0.0.1//multer')

}
module.exports=coll