const express = require('express')
const connect = require('./config/Server')
const UserRoute = require('./Routes/UserRoute')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors())
app.use('/user',UserRoute);
app.listen(9595,()=>{
   console.log("Server is running on 9595 port") 
   connect()
})