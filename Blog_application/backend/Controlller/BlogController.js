const BlogModel = require("../model/BlogModel")

const Blog = async(req,res) =>{
    let data= await BlogModel.find()
    console.log(data);
    if(!data)
    {
    res.json({data : "Data not added"})
    }

    res.json({ data ,  UserId:`${req.body.userId}` })
}
const Blog_Add = async(req,res) =>{
     const {title,image,description} = req.body
     const {userId} = req.body
     let data= await BlogModel.create({
        title,
        image,
        description,
        userId
     })
     console.log(data);
     
     res.json({data})
}
const blog_own = async (req,res) =>{
     console.log(req.body.userId);
     
  const data = await BlogModel.find({userId : req.body.userId}).populate("userId","username email") 
  console.log(data);
  
  res.send({data : data})    
}
const blog_single = async(req,res) =>{
   try { 
      let id = req.params.id
      let data = await BlogModel.findById({ _id : id });
      console.log(data);
      res.status(200).json(data);
  } catch (error) {
      res.status(401).json({ error: "Failed to fetch blog by ID" });
  }

}
 module.exports={Blog,Blog_Add,blog_own , blog_single}