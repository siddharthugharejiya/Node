
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

module.exports = {addproduct}