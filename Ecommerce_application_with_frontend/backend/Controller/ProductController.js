const ProductModel = require("../Model/ProductModel")

const addproduct = async (req, res) => {
    const {
        title,
        description,
        image,
        price,
        adminId,
        category,
        subcategory
    } = req.body
    console.log(req.body);
    

    try {
        const data = await ProductModel.create({
            title,
            description,
            image,
            price,
            adminId,    
            category,
            subcategory
        })
        console.log(req.body)
        res.status(201).send({ msg: "Product added successfully", data })
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
