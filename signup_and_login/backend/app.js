const express = require('express')
const connect = require('./config/Server')
const app = express()

app.listen(9595,()=>{
   console.log("Server is running on 9595 port") 
   connect()
})