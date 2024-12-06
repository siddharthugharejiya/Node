const mongoose = require('mongoose')

const Category_schema = mongoose.Schema({
    name : String
})
const CategoryModel = mongoose.model("category",Category_schema)
module.exports = CategoryModel