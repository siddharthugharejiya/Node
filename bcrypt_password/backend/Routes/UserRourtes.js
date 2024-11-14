const express = require("express")
const { signup, login_controller } = require("../controller/UserController")
const UserRoute = express.Router()
UserRoute.post("/",signup)
UserRoute.post("/login",login_controller)
module.exports=UserRoute