const mongoose = require('mongoose')
const BLog = mongoose.Schema({
    title: { type: String, default: null },
    image: { type: String, default: null },
    description: { type: String, default: null }
})
const BlogModel = mongoose.model("BlogModel", BLog)
module.exports = BlogModel