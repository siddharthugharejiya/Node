 const BlogModel = require("../Model/BlogModel");


const blog = async (req, res) => {
 
    try {
        let data = await BlogModel.find()
        let one = await BlogModel.findOne(data.userId)
        console.log(one);
        
       
        res.send({msg : `this is all blog data is`, data : data,userId : one })
   
    } catch (error) {
        console.error("Error fetching blogs:", error);
      
    }
};


const blog_post = async (req, res) => {
  const { title, image, description, userId } = req.body;

  try {
    const newBlog = await BlogModel.create({
      title,
      image,
      description,
      userId: userId, // Ensure the key matches the field in the schema
    });

    res.status(201).send({
      msg: "Blog added successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).send({ msg: "Failed to add blog", error: error.message });
  }
};

const own = async (req, res) => {
  try {
    console.log(req.body.userId);

    let blogs = await BlogModel.find({ userId: req.body.userId }).populate(
      "userId",
      "username email"
    );

    console.log(blogs);

    res.send({
      msg: "User-specific blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    res.status(500).send({ msg: "Failed to fetch user blogs", error: error.message });
  }
};

const del = (req,res) =>{
  const {id}=req.body.params
  console.log(id);
  res.send({msg : "User data finde"})
  

}

module.exports = { blog, blog_post ,own ,del};
