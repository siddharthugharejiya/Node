const express = require('express')
const { register, Login } = require('../Controller/UserController')
const { blog, blog_post, Own_blog, singleBlog } = require('../Controller/BlogController')
const Auth = require('../config/auth')
const UserRoute = express()
UserRoute.post("/register",register)
UserRoute.post("/login",Login)
UserRoute.get("/blog",Auth,blog)
UserRoute.get("/blog/:id",Auth,singleBlog)
UserRoute.post("/add",Auth,blog_post)
UserRoute.get("/own",Auth,Own_blog)
module.exports=UserRoute

