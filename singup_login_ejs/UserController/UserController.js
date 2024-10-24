const Auth = require("../Config/Auth")
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

const Login_post = async (req, res) => {
     let { email, password } = req.body;
     let d = await UserModel.findOne({ email });  
       console.log(d);
       
     if (!d) {
         console.log("Data not found");
         return res.redirect("/user/"); 
     }
 
     if (d.password !== password) {
         console.log("Password Invalid");
         return res.redirect("/user/login"); 
     }
 
     console.log("Successfully logged in");
     res.cookie('login', d.email, { maxAge: 10000, httpOnly: true });
     return res.redirect("/user/product")
 };

const Form_Post_Con=async(req,res)=>{
     console.log(req.cookies);
     await UserModel.create(req.body)
     console.log('Cookies: ', req.cookies)
     res.redirect("/user/login")

     
}
module.exports={Form_Con,Form_Post_Con,Login,Login_post,product}