const express = require("express")
const cors = require('cors')
const Connected = require("./config/Connect")
const bodyParser = require('body-parser');
const UserRoute = require("./UserRoute/UserRoute")
const cookie = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser())
app.use(cookie())

app.use("/",UserRoute)


app.listen(9595,()=>{
    console.log("port is running")
    Connected()
})