const express = require("express")
const cors = require('cors')
const Connected = require("./config/Connect")
const UserRoute = require("./UserRoute/UserRoute")
const app = express()
app.use(express.json())
app.use(cors())

app.use("/",UserRoute)

app.listen(9595,()=>{
    console.log("port is running")
    Connected()
})