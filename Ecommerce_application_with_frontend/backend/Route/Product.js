const {Router} = require('express')
const { addproduct, Getproduct } = require('../Controller/ProductController')
const { Auth } = require('../Config/auth')
const ProductRoute = Router()
ProductRoute.post("/add",Auth,addproduct)
ProductRoute.get("/product",Getproduct)
module.exports=ProductRoute