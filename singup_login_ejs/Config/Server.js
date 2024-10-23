const mongoose = require('mongoose') 
require("dotenv").config()
const Connect = async() =>{
    await mongoose.connect(process.env.MONGOOSE_URL)
    console.log("Mongoose Connected Sucessfully");  
}
module.exports=Connect