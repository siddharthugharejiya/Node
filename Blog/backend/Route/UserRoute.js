const express = require('express')
const {Register, Login} = require('../Controller/UserController')
const { blog, blog_add } = require('../Controller/BolgController')
const authenti = require('../middleware/auth')
const UserRoute  = express.Router()

UserRoute.post("/register",Register)
UserRoute.post("/login",Login)
UserRoute.get("/",authenti,blog)

UserRoute.post("/add", authenti,blog_add)

module.exports=UserRoute