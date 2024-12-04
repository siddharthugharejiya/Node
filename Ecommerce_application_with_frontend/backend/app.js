const express = require('express')
const Server = require('./Config/Server')
const UserRoute = require('./Route/UserRoutes')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",UserRoute)

app.listen(9595,()=>{
    console.log("Port is running")
    Server()
})