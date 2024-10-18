const express = require('express')
const { form_render, data_get } = require('../Controller/UserController')
const {route} = express.Router()
route.get("/",form_render)

module.exports={route}