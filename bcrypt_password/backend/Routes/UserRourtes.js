const express = require("express")
const { signup } = require("../controller/UserController")
const UserRoute = express.Router()
UserRoute.post("/",signup)
module.exports=UserRoute