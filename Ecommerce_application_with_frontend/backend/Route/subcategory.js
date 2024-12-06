const {Router} = require('express')
const { subcategory_controller } = require('../Controller/subcategory_controller')
const Subcategory = Router()
 
Subcategory.post("/subcategory",subcategory_controller)
module.exports = Subcategory