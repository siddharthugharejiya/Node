const express = require('express')
const connect = require('./Server')
const Usermodel = require('./Model/Userschema')
const app = express()
app.get("/",(req,res)=>{
    res.send("hello")
})
app.post("/form",async()=>{
   await Usermodel.create(req.body)
   console.log("data add successfully")
})
app.listen(9595,()=>{
    console.log('server is running on 9595')
    connect()
})