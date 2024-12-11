const {Router} = require('express')
const { addproduct, Getproduct } = require('../Controller/ProductController')
const { validation } = require('../Config/auth')

const ProductRoute = Router()

ProductRoute.post("/addproduct",validation,addproduct)
ProductRoute.get("/product",Getproduct)
module.exports=ProductRoute