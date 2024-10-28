const mongoose = require('mongoose')
const BlogSchema = mongoose.Schema({
    image:String,
    title:String,
    description:String
})
const UserBlog = mongoose.model('Blog', BlogSchema);
module.exports=UserBlog