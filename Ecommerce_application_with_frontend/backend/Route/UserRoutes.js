const express = require('express')
const { Form, getall_data, login } = require('../Controller/UserController')
const UserRoute = express.Router()
UserRoute.post("/form",Form)
UserRoute.post("/login",login)
UserRoute.get("/getall",getall_data)
module.exports=UserRoute