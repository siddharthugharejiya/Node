const express = require('express')
const Usermodel = require('../Model/Userschema')
const Auth = require('../config/Auth')
const passport = require('passport')
const UserRoute = express.Router()

UserRoute.get("/signup",(req,res)=>{
      res.render("signup.ejs")
})
UserRoute.get("/login",(req,res)=>{
    res.render("login.ejs")
})
UserRoute.get("/product", (req, res) => {
    const username = req.user ? req.user.username : "Guest"; 
    console.log(username);
    
    res.render("product", { username });
});
UserRoute.post("/signup",async(req,res)=>{
    const data = await Usermodel.create(req.body)
    console.log(data)
    res.redirect("/login")
})
UserRoute.post("/login",
    passport.authenticate('local', {
        successRedirect: "/product",
        failureRedirect: "/login", 
        failureFlash: true
        })
);
module.exports=UserRoute