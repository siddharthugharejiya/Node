
const express = require('express');
const Usermodel = require('../Model/UserModel');
const passport = require('passport');
const Auth = require('../Config/Auth');
const BlogModel = require('../Model/UserModel');
const UserRoute = express.Router();
const multer = require('multer');
const path = require('path');

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,"public/image"))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
console.log(path.join(__dirname, "public/image"))
const upload = multer({ storage: store }); 


UserRoute.get("/", (req, res) => {
    res.render("signup.ejs");
});

UserRoute.get("/login", (req, res) => {
    res.render("login.ejs");
});

UserRoute.get("/blog", Auth,upload.single('image'), async(req, res) => {
     let data = BlogModel.find()
     console.log(data);
     
    res.render("blog.ejs");
});


UserRoute.get("/blog_data", upload.single('image'), async (req, res) => {
    let data = await BlogModel.find(); 
    console.log(data);
    
    res.render("blog_data.ejs", { data })
});

UserRoute.post("/", async (req, res) => {
    console.log(req.body); 
    let data = await Usermodel.create(req.body); 
    console.log(data); 
    res.redirect("/login"); 
});

UserRoute.post("/login", passport.authenticate('local', {
    successRedirect: "/blog", 
    failureRedirect: "/login" 
}));

UserRoute.post("/blog", upload.single('image'), async (req, res) => {
    let data = await BlogModel.create(req.body); 
    // console.log(data); 
    res.redirect("/blog_data"); 
})

module.exports = UserRoute;
