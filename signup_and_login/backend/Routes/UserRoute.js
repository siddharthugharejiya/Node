const express = require('express');
const { form_Route, Login_route } = require('../Controller/UserController')

const UserRoute = express.Router()
UserRoute.post("/form",form_Route)
UserRoute.post("/login",Login_route)
module.exports=UserRoute
