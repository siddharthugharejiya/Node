 const BlogModel = require("../Model/BlogModel");

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
            content,
            userId: new mongoose.Types.ObjectId(userId)
        });

        res.status(201).send({ msg: "Blog added successfully", data: newBlog });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).send({ msg: "Internal Server Error", error: error.message });
    }
};

module.exports = { blog, blog_post };
