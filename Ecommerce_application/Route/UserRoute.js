const express = require('express')
const Register = require('../Controller/UserController')
const UserRote = express.Router()
UserRote.post("/register",Register)
module.exports = UserRote