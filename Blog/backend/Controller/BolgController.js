const BlogModel = require("../Model/BlogModel")
const blog_add = async (req, res) => {
    const { title, image, description } = req.body;
    console.log("Request user:", req.user);
    console.log("Request body:", req.body);

    const { userId } = req.user || {}; 
    if (!userId) {
        return res.status(400).json({ message: "User ID is missing or invalid." });
    }

    try {
        const data = await BlogModel.create({
            image,
            title,
            description,
            userId
        });

        console.log("Blog post created:", data);
        res.status(201).json({
            message: "Blog post created successfully!",
            blog: data
        });

    } catch (error) {
        console.error("Error creating blog post:", error.message);
        res.status(500).json({ message: "An error occurred while creating the blog post." });
    }
};
module.exports={blog_add}