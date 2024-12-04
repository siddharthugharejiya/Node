const express = require('express')
const { Form } = require('../Controller/UserController')
const UserRoute = express.Router()
UserRoute.post("/form",Form)
module.exports=UserRoute