 const BlogModel = require("../Model/BlogModel");
 const mongoose = require('mongoose')

const blog = async (req, res) => {
 
    try {
        let data = await BlogModel.find()
        // console.log(data); 
        res.send({msg : `this is all blog data is`,data : data})
   
    } catch (error) {
        console.error("Error fetching blogs:", error);
      
    }
};

const blog_post = async (req, res) => {
    const { title, image, description, userId } = req.body;
    console.log(title, image, description, userId);
    

        const newBlog = await BlogModel.create({
            title,
            image,
            description,
            userId: userId
        });

        res.status(201).send({ msg: "Blog added successfully", data: newBlog });

};
const Own_blog = async (req, res) => {
    try {
      const { userId } = req.body;
      console.log(`This is userId: ${userId}`);
  
      if (!userId) {
        return res.status(400).send({ message: "UserId is required" }); 
      }
  
      const blogs = await BlogModel.findOne({ userId }).populate('userId', 'username email');
      console.log(blogs);
  
    
  
  
    } catch (error) {
      console.error("Error fetching the blog:", error);
  
      if (!res.headersSent) {
        return res.status(500).send({ message: "Internal server error" }); 
      }
    }
  };


  const singleBlog = async (req,res)=>{
     try {
        let data = await BlogModel.findById(req.params.id)
        res.send({data : data})
     } catch (error) {
         res.send({err : error.message})
     }
  }


module.exports = { blog, blog_post ,Own_blog ,singleBlog};
