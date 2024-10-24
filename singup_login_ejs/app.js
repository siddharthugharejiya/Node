const express = require('express')
const UserRoute = require('./UserRoutes/UserRoutes')
const Connect = require('./Config/Server')
require('dotenv').config()
const app = express()
const cookie = require('cookie-parser')
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())
app.use(cookie())
app.use(express.urlencoded({extended:true}))
app.use("/user",UserRoute)
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig on PORT`)
    Connect()
})


