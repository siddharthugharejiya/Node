const mongoose = require('mongoose')
const Connect = async() =>{
  await  mongoose.connect(process.env.MONGOOSE_URL)
  console.log("Mongoose connected successfully")
}
module.exports=Connect