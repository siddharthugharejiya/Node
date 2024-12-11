
const ProductModel = require("../Model/ProductModel")

const addproduct = async(req,res) =>{
    console.log(req.body);
    
    try {
        const data = await ProductModel.create(req.body)
        console.log(data);
        
        res.send({data})
    } catch (error) {
        res.send(error.massage)
    }
}

const Getproduct = async(req,res) =>{
    try {
        const data = await ProductModel.find()
        res.status(200).send({data})
    } catch (error) {
        res.status(400).send(error.massage)
    }

}

module.exports = {addproduct , Getproduct}