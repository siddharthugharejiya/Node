const UserModel = require("../model/userSchema");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const SignupModel = require("../model/authSchema");
const image_path = path.join(__dirname, "../public");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, image_path);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).single("image");

const blog_get = (req, res) => {
    try {
        res.render("blog.ejs");
    } catch (error) {
        console.log(error);
    }
};

const signup = async(req,res) =>{
        res.render("signup")
}
const signup_post = async(req,res)=>{
   let data = await SignupModel.create(req.body)
   console.log(data);
   res.redirect("/login")
   
}
const blog_post = async (req, res) => {
    try {
        let { title, description } = req.body;
        let data = await UserModel.create({
            image: req.file.filename,
            title: title,
            description: description,
        });
        console.log(data);
        res.redirect("/data");
    } catch (error) {
        console.log(error);
    }
};

const data = async (req, res) => {
    try {
        let data = await UserModel.find();
        res.render("data", { data });
    } catch (error) {
        console.log(error);
    }
};

const del = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await UserModel.findById(id);

        if (data) {
            await UserModel.findByIdAndDelete(id);
            const image_path = path.join(__dirname, "../public", data.image);
            console.log(image_path);

            if (fs.existsSync(image_path)) {
                fs.unlinkSync(image_path);
            }
        } else {
            await UserModel.findByIdAndDelete(id);
        }

        res.redirect("/data");
    } catch (error) {
        console.log(error);
    }
};

const edit_get = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await UserModel.findById(id);
        console.log(data);

        res.render("edit", { data });
    } catch (error) {
        console.log(error);
    }
};
const Login_get = (req,res) =>{
  res.render("login")
}
const login_post = (req,res) =>{

}
const edit_post = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await UserModel.findById(id);

        if (data) {
            const old_path = path.join(__dirname, "../public", data.image);

            if (fs.existsSync(old_path)) {
                fs.unlinkSync(old_path);
            }

            await UserModel.findByIdAndUpdate(id, {
                ...req.body,
                image: req.file.filename,
            });
        } else {
            await UserModel.findByIdAndUpdate(id, {
                ...req.body,
            });
        }
        res.redirect("/data");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    blog_get,
    blog_post,
    upload,
    data,
    del,
    edit_get,
    edit_post,
    signup,
    Login_get,
    signup_post,
    login_post
}