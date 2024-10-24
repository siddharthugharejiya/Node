const express = require('express')
const { Form_Con, Form_Post_Con, Login, Login_post, product } = require('../UserController/UserController')
const Auth = require('../Config/Auth')
const passport = require('passport')
const UserRoute = express.Router()

UserRoute.get("/",Form_Con)
UserRoute.get("/login",Login)
UserRoute.get("/product",Auth,product)
UserRoute.post("/",Form_Post_Con)
UserRoute.post("/login",passport.authenticate('local'), Login_post)
module.exports=UserRoute