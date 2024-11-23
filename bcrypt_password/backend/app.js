const express = require('express')
const Connect = require('./Config/Server')
const UserRoute = require('./Routes/UserRourtes')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",UserRoute)
app.listen(9595, () => {
    Connect()
    console.log("port is connected")
}) 