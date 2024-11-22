const BlogModel = require("../Model/BlogModel")

const blog = async(req,res) =>{
       const {title,image,description} = req.body
       await BlogModel(req.body)
}
module.exports={blog}