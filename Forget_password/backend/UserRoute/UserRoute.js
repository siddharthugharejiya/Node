const express = require('express')
const { signup, login, Forget,  change_pass } = require('../Controller/UserController')
const UserRoute = express()
UserRoute.post("/",signup)
UserRoute.post("/login",login)
UserRoute.post("/forget",Forget)
UserRoute.post("/change",change_pass)
module.exports = UserRoute