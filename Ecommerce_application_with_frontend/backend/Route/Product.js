const {Router} = require('express')
const { addproduct } = require('../Controller/ProductController')

const ProductRoute = Router()

ProductRoute.post("/addproduct",addproduct)
module.exports=ProductRoute