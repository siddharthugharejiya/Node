const express = require('express')
const { Form, getall_data } = require('../Controller/UserController')
const UserRoute = express.Router()
UserRoute.post("/form",Form)
UserRoute.get("/getall",getall_data)
module.exports=UserRoute