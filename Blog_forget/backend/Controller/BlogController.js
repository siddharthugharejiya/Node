const BlogModel = require("../Model/BlogModel");

const blog = async (req, res) => {
  try {
    let data = await BlogModel.find();
    let one = await BlogModel.findOne({ userId: data?.[0]?.userId });
    console.log(one);

    res.send({
      msg: "This is all blog data",
      data: data,
      userId: one,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send({ msg: "Failed to fetch blogs", error: error.message });
  }
};

const blog_post = async (req, res) => {
  const { title, image, description, userId } = req.body;

  try {
    const newBlog = await BlogModel.create({
      title,
      image,
      description,
      userId,
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
  // console.log(req.body.params);
  
  // console.log(req.body.userId);
  let Blogs = await BlogModel.find({ userId: req.body.userId }).populate(
    "userId",
    "username email"
  );
  console.log(Blogs);
  res.send({ data: Blogs });
};

module.exports = { blog, blog_post, own };
