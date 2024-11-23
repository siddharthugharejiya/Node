const express = require('express')
const {Register, Login} = require('../Controller/UserController')
const { blog } = require('../Controller/BolgController')
const authenti = require('../middleware/auth')
const UserRoute  = express.Router()

UserRoute.post("/register",Register)
UserRoute.post("/login",Login)
UserRoute.post("/", authenti,blog)

module.exports=UserRoute