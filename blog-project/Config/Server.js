const mongoose = require('mongoose')
const connect = async() =>{
     await mongoose.connect(process.env.MONGOOSE_URL)
     console.log('mongoose connected successfully')

}
module.exports=connect