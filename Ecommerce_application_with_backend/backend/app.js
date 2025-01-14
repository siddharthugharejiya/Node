const express = require('express')
const Server = require('./Config/Server')
const UserRoute = require('./Route/UserRoutes')
const cors = require('cors')
const ProductRoute = require('./Route/Product')
const Category_Router = require('./Route/Category')
const Subcategory = require('./Route/subcategory')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",UserRoute)
app.use("/",ProductRoute)
app.use("/",Category_Router)
app.use("/",Subcategory)

app.listen(process.env.PORT,()=>{
    console.log(`Port is running`)
    Server()
})