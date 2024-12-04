const express = require('express')
const {Register, Login} = require('../Controller/UserController')
const UserRote = express.Router()
UserRote.post("/register",Register)
UserRote.post("/login",Login)
module.exports = UserRote