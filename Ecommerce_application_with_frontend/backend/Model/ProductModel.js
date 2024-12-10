const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name : {type : String , require:true },
    image : {type : String , require : true},
    price : {type : Number , require: true},
    description : {type : String , require:true},
    category : {type : mongoose.Schema.Types.ObjectId, ref:"category"},
    subcategory : {type : mongoose.Schema.Types.ObjectId, ref:"subcategory"}
})
const ProductModel = mongoose.model("product",productSchema)
module.exports=ProductModel