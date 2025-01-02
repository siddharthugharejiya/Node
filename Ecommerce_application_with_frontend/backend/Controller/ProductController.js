
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
    const {id} = req.params
    console.log(req.body);
    const data = await CartModel.create({ ...req.body, id });
    res.send({data : data})
    
    
  } catch (error) {
    console.log(error);
    
  }
}

const singledata = async(req,res) =>{
  const { id } = req.params;
  try {
      const data = await ProductModel.findById(id);
      if (!data) {
          return res.status(404).send({ message: "Product not found" });
      }
      res.send({ data });
  } catch (error) {
      res.status(500).send({ message: "Server error" });
  }
}

module.exports = { addproduct, Getproduct, del, edite, edite_post, cart_post , singledata}
