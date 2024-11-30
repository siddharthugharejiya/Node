const expess = require('express')
const Auth = require('../Config/Auth')
const { Blog, Blog_Add, blog_own } = require('../Controlller/BlogController')
const BlogRote = expess.Router()
BlogRote.get("/blog",Auth,Blog)
BlogRote.post("/add",Auth,Blog_Add)
BlogRote.get("/own",Auth,blog_own)
BlogRote.get("/single/:id",blog_own)
module.exports=BlogRote