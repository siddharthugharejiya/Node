const express = require('express')
const Connect = require('./Config/Serve')
const UserRoute = require('./Route/UserRoute')
const app = express()
app.use(express.json())
app.use("/",UserRoute)

app.listen(9595,()=>{
    console.log("Port is running ")
    Connect()
})