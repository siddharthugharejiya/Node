const ProductModel = require("../Model/ProductModel")

const addproduct = async(req,res) =>{
    try {
        const data = await ProductModel.create(req.body)
        
        res.send({data})
    } catch (error) {
        res.send(error.massage)
    }
}
module.exports = {addproduct}