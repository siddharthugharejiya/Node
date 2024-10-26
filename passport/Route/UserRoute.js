    const express = require('express')
    const UserModel = require('../model/UserModel')
    const passport = require('passport')
const Auth = require('../Config/Auth')
    const UserRoute = express.Router()

    UserRoute.get("/",(req,res)=>{
    res.render('signup.ejs')
    })
    UserRoute.get("/login",(req,res)=>{
        res.render("login.ejs")
    })
    UserRoute.get("/product",Auth,(req,res)=>{
        res.render("product.ejs")
    })
    UserRoute.post("/",async(req,res)=>{
    let d=await UserModel.create(req.body)
    console.log(d);
    res.redirect("/login")
    
    })
    UserRoute.post("/login", passport.authenticate('local', {
        successRedirect: "/product",
        failureRedirect: "/login"
    }),async(req,res)=>{
    
    })


    module.exports=UserRoute