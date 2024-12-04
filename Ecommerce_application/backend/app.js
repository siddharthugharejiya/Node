const express = require('express')
const cors = require('cors')
require('dotenv').config();
const Connected = require('./Config/Server')
const UserRote = require('./Route/UserRoute')

const app = express()
// dotenv.config();
app.use(express.json())
app.use(cors())
app.use('/',UserRote)
app.listen(process.env.PORT,()=>{
    Connected()
    console.log("port is running on port" )
})