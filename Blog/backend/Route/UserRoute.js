const express = require('express')
const {Register, Login} = require('../Controller/UserController')
const UserRoute  = express.Router()

UserRoute.post("/register",Register)
UserRoute.post("/login",Login)
UserRoute.post()

module.exports=UserRoute