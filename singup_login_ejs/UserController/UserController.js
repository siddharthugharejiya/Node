const UserModel = require("../Model/UserModel")
const Form_Con = (req,res) =>{
     res.render("form.ejs")
}
const Login = (req,res) =>{
     res.render("login.ejs")
}
const product=(req,res)=>{
     res.render("Product.ejs")
}
const Login_post = async(req,res)=>{
     let {email,password}=req.body
   let d=await UserModel.findOne({email,password})
   if(!d)
   {
     console.log("Data not found")
     res.redirect("/user/")
   }
   if(d && d.password != password)
   {
     console.log("password Wrong")
   }
   if(d && d.password == password)
   {
     console.log("Successfully Login")
     res.redirect("/user/product")
     res.cookie("login",d.email)
   }
   console.log(d);
   
}

const Form_Post_Con=async(req,res)=>{
     console.log(req.cookies);
     let d=await UserModel.create(req.body)
     console.log('Cookies: ', req.cookies)
     res.redirect("/user/login")
     // console.log(d);
     
}
module.exports={Form_Con,Form_Post_Con,Login,Login_post,product}