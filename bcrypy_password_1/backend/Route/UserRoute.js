const express = require('express')
const {signup, login, change} = require('../Controller/UserController')
const UserRoute = express.Router()
UserRoute.post("/",signup)
UserRoute.post("/login",login)
UserRoute.post("/change",change)
module.exports=UserRoute
