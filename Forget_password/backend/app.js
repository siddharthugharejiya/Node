const express = require('express');
const Connect = require('./Confing/server');
const UserRoute = require('./UserRoute/UserRoute');
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use("/",UserRoute)
app.listen(9595,()=>{
     console.log("port is running");
     Connect()   
})