const {Router} = require('express')
const category_add = require('../Controller/category_controller')

const Category_Router = Router()

Category_Router.post("/category",category_add)

module.exports = Category_Router