const express = require('express')
const { register, Login } = require('../Controller/UserController')
const { blog } = require('../Controller/BlogController')
const Auth = require('../config/auth')
const UserRoute = express()
UserRoute.post("/register",register)
UserRoute.post("/login",Login)
UserRoute.get("/",Auth,blog)
module.exports=UserRoute