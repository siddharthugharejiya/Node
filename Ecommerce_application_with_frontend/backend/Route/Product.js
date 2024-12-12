const {Router} = require('express')
const { addproduct, Getproduct } = require('../Controller/ProductController')
const { validation, Auth } = require('../Config/auth')

const ProductRoute = Router()

ProductRoute.post("/addproduct",validation,Auth,addproduct)
ProductRoute.get("/product",Getproduct)
module.exports=ProductRoute