const Auth = require("../Config/Auth")
const UserModel = require("../Model/UserModel")
const Form_Con = (req,res) =>{
     res.render("form.ejs")
}
const Login = (req,res) =>{
     res.render("login.ejs")
}
const product=(req,res)=>{
     res.render("Product.ejs",{data : req.user.username})
}

const Login_post = async (req, res) => {
 
 };
 

const Form_Post_Con=async(req,res)=>{
     await UserModel.create(req.body)
     console.log(req.body);
     
     res.redirect("/user/login")

     
}
module.exports={Form_Con,Form_Post_Con,Login,Login_post,product}