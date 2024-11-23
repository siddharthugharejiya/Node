const express = require('express')
const Connect = require('./Config/Serve')
const UserRoute = require('./Route/UserRoute')
const cors  =  require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",UserRoute)

app.listen(9595,()=>{
    console.log("Port is running ")
    Connect()
})