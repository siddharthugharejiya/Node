const {Router} = require('express')
const { addproduct, Getproduct } = require('../Controller/ProductController')
const { Auth, validation } = require('../Config/auth')
const ProductRoute = Router()
ProductRoute.post("/add",validation,Auth,addproduct)
ProductRoute.get("/product",Getproduct)
module.exports=ProductRoute