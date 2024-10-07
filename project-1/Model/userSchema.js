const mongoose = require("mongoose")
const Userschema = new mongoose.Schema({
    bookname:String,
    image:String,
    price:String,
    date:String,
    author:String,
    description:String
})

const Usemodel = mongoose.model("book",Userschema)
module.exports=Usemodel