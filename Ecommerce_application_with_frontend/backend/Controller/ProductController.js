const { trusted } = require("mongoose");
const ProductModel = require("../Model/ProductModel");

const addproduct = async (req, res) => {
  try {
    const { name, image, price, description, category, subcategory } = req.body;
    const product = {
      name,
      image,
      price,
      description,
      category,
      subcategory,
      adminId: req.user.id, 
    };
    console.log(req.id);
    

    console.log(product);

    const data = await ProductModel.create(product);
    console.log(data);
    res.status(201).send({ data });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const Getproduct = async (req, res) => {
  try {
    const data = await ProductModel.find();
    res.status(200).send({ data });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
const del =  async (req,res) =>{
  try {
    const {id} = req.params
    console.log(id);
    
    const data = await ProductModel.findByIdAndDelete(id)
    res.send({data})
  } catch (error) {
    console.log(error);
    
  }
}
const edite = async (req,res) =>{
try {
   const {id} = req.params
   
   const data = await ProductModel.findById(id)
   console.log(data);
   
   res.send({data})
} catch (error) {
  console.log(error);
  
}
}
const edite_post = async(req,res) =>{
  try {
    const {id} = req.params
    const data = await ProductModel.findByIdAndUpdate(id,req.body)
    res.send({data})
  } catch (error) {
    
  }
}
const cart = async (req,res) =>{
  try {
    const {id} = req.params
    const data = await ProductModel.findById(id)
     res.send({data})
    
  } catch (error) {
    console.log(error);
    
  }
}
module.exports = { addproduct, Getproduct ,del ,edite , edite_post , cart}
