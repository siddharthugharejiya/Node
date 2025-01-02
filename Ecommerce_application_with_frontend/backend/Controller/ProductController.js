const { trusted } = require("mongoose");
const ProductModel = require("../Model/ProductModel");
const CartModel = require("../Model/CartModel");

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
const del = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id);

    const data = await ProductModel.findByIdAndDelete(id)
    res.send({ data })
  } catch (error) {
    console.log(error);

  }
}
const edite = async (req, res) => {
  try {
    const { id } = req.params

    const data = await ProductModel.findById(id)
    console.log(data);

    res.send({ data })
  } catch (error) {
    console.log(error);

  }
}
const edite_post = async (req, res) => {
  try {
    const { id } = req.params
    const data = await ProductModel.findByIdAndUpdate(id, req.body)
    res.send({ data })
  } catch (error) {

  }
}
// const cart = async (req,res) =>{
//   try {
//     const userId = req.user.id;
//     const cartItems = await CartModel.find({ userId }).populate("productId").exec();
//     res.status(200).send({ cartItems });
//   } catch (error) {
//     console.error("Error fetching cart items:", error);
//     res.status(500).send({ message: error.message });
//   }
// }
const cart_post = async (req, res) => {
  try {
    const { id } = req.params; // Product ID from URL
    const userId = req.user.userId; // User ID from decoded token
    console.log(req.body);
    
    
    console.log("Product ID:", id);
    console.log("User ID:", userId);

    // Check if the cart already exists for the user
    let cart = await CartModel.findByIdAndUpdate(id,{userId,...req.body})
    console.log(cart);
    
    
    
    
    res.status(200).send({ msg: "Product added to cart", cart: cart });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(400).send({ msg: error.message });
  }
}

const singledata = async(req,res) =>{
        const {id} = req.params
       const data = await ProductModel.findById(id)
       console.log(data);
       
       res.send({data})
        
}

module.exports = { addproduct, Getproduct, del, edite, edite_post, cart_post , singledata}
