const mongoose = require('mongoose');
const Server = async() =>{
    await mongoose.connect("mongodb+srv://multiera95:95@ecommerce.ofpkg.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce")
    console.log("Server is connected")
}
module.exports=Server