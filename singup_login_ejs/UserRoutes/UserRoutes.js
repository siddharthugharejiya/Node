const express = require('express')
const { Form_Con, Form_Post_Con, Login, Login_post, product } = require('../UserController/UserController')
const UserRoute = express.Router()

UserRoute.get("/",Form_Con)
UserRoute.get("/login",Login)
UserRoute.get("/product",product)
UserRoute.post("/",Form_Post_Con)
UserRoute.post("/login",Login_post)
module.exports=UserRoute