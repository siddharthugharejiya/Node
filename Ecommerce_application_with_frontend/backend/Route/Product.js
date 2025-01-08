const { Router } = require('express')
const { addproduct, Getproduct, del, edite, edite_post, cart, cart_post, singledata, cart_del } = require('../Controller/ProductController')
const { Auth, validation } = require('../Config/auth')
const ProductRoute = Router()
ProductRoute.post("/add", validation, Auth, addproduct)
ProductRoute.get("/product", Getproduct)
ProductRoute.delete("/product/:id", del)
ProductRoute.delete("/cart/:id", cart_del)
ProductRoute.get("/product/:id",edite)
ProductRoute.put("/product/:id",edite_post)
ProductRoute.get("/cart",cart)
ProductRoute.post("/cart/:id",validation,cart_post)
ProductRoute.get("/single/:id",singledata)
module.exports = ProductRoute