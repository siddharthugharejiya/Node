 const BlogModel = require("../Model/BlogModel");
 const mongoose = require('mongoose')

const blog = async (req, res) => {
    try {
        let data = await BlogModel.find().populate('userId', 'username email');
        res.status(200).send({ msg: "Blogs fetched successfully", data });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).send({ msg: "Internal Server Error", error: error.message });
    }
};

const blog_post = async (req, res) => {
    const { title, image, description, userId } = req.body;
    
    try {
        const newBlog = await BlogModel.create({
            title,
            image,
            description,
            userId: new mongoose.Types.ObjectId(userId)
        });

        res.status(201).send({ msg: "Blog added successfully", data: newBlog });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).send({ msg: "Internal Server Error", error: error.message });
    }
};
const Own_blog = async (req, res) => {
    try {
      const { userId } = req.body;
      console.log(`This is userId: ${userId}`);
  
      if (!userId) {
        return res.status(400).send({ message: "UserId is required" }); // Early return if no userId
      }
  
      const blogs = await BlogModel.findOne({ userId }).populate('userId', 'username email');
      console.log(blogs);
  
    
  
    //   return res.status(200).send({ data: blogs }); // Send the response
    } catch (error) {
      console.error("Error fetching the blog:", error);
  
      if (!res.headersSent) {
        return res.status(500).send({ message: "Internal server error" }); // Ensure only one response is sent
      }
    }
  };


module.exports = { blog, blog_post ,Own_blog };
