const mongoose = require('mongoose')  

const connect = async() =>{
            await mongoose.connect("mongodb+srv://multiera95:95@userdata.inz7c.mongodb.net/?retryWrites=true&w=majority&appName=Userdata") 
            console.log("Mongoose connect successfully")
}
module.exports=connect