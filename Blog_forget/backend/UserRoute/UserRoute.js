const express = require('express')
const { register, Login } = require('../Controller/UserController')
const { blog, blog_post, own, del } = require('../Controller/BlogController')
const Auth = require('../config/auth')
const UserRoute = express()
UserRoute.post("/register",register)
UserRoute.post("/login",Login)
UserRoute.get("/blog",Auth,blog)
UserRoute.post("/add",Auth,blog_post)
UserRoute.get("/own",Auth,own)
UserRoute.get("/own/:id",del)

module.exports=UserRoute

