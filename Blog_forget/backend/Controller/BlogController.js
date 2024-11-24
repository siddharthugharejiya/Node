const BlogModel = require("../Model/BlogModel");

const blog = async (req, res) => {
    try {
        // Fetch all blogs and populate 'userId' with 'username' and 'email'
        let data = await BlogModel.find().populate('userId', 'username email');
        
        if (data.length === 0) {
            return res.status(404).send({ msg: "No blogs found" });
        }

        res.status(200).send({ msg: "Blogs fetched successfully", data });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).send({ msg: "Internal Server Error", error: error.message });
    }
};

module.exports = { blog };
