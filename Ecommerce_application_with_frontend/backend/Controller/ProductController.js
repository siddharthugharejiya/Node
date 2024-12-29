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
};

module.exports = { addproduct, Getproduct };
