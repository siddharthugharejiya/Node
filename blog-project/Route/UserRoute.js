const express = require('express')
const { blog_get, blog_post, upload, data, del, edit_get, edit_post, signup, signup_post, Login_get, login_post } = require('../controller/usercontroller');
const passport = require('passport');
const Auth = require('../config/Auth');
const UserRoute = express.Router()

UserRoute.get("/blog", blog_get);
UserRoute.get("/data",Auth,data)
UserRoute.get("/del/:id",del)
UserRoute.get("/",signup)
UserRoute.get("/edit/:id",upload, edit_get)
UserRoute.get("/login",Login_get)
UserRoute.post("/edit/:id",upload, edit_post)
UserRoute.post("/blog",upload,blog_post)
UserRoute.post("/",signup_post)
UserRoute.post("/login",passport.authenticate('local',{successRedirect:"/blog",failureRedirect:"/",failureMessage:"data not found"}), login_post)
module.exports=UserRoute