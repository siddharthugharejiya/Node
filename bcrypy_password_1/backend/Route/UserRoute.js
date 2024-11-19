const express = require('express')
const {signup, login, change, Forget} = require('../Controller/UserController')
const UserRoute = express.Router()
UserRoute.post("/",signup)
UserRoute.post("/login",login)
UserRoute.post("/change",change)
UserRoute.post("/forget",Forget)
module.exports=UserRoute
