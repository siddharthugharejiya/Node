
const BlogModel = require("../Model/BlogModel");

const blog = async(req,res) => {
    const { title, image, description} = req.body;
    const {userId} = req
   
    if (!title || !image || !description || !userId) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
      
        const data = await BlogModel.create({
            image,
            title,
            description,
            userId
        });

        console.log(data);
        res.status(201).json({
            message: "Blog post created successfully!",
            blog: data
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the blog post." });
    }
};

module.exports = { blog };
