const ProductModel = require("../Model/ProductModel")

const addproduct = async (req, res) => {
    try {
       
       const data = await ProductModel.create(req.body)
       console.log(data);
       res.send({data})
       
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const Getproduct = async (req, res) => {
    try {
        const data = await ProductModel.find()
        res.status(200).send({ data })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { addproduct, Getproduct }
