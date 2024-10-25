const express = require('express')
const Usermodel = require('../Model/Userschema')
const UserRoute = express.Router()

UserRoute.get("/signup",(req,res)=>{
      res.render("signup.ejs")
})
UserRoute.post("/signup",async(req,res)=>{
    const data = await Usermodel.create(req.body)
    console.log(data)
})
module.exports=UserRoute