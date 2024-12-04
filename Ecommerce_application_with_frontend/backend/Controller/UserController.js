const UserModel = require("../Model/UserModel");
require('dotenv').config()

const Form = async(req,res)=>{
    console.log("Admin Secret Key from .env: ", process.env.adminsecretkey);
    // console.log(process.env);
    try {
        const {username,email,password,role,secretkey}=req.body
        
        if (role === "admin") {
            if (process.env.adminsecretkey !== secretkey) {
              return res.send({ msg: "You are not authorized" }); 
            }
          }
         const data = await UserModel.create(req.body)
       console.log(data);
        res.send({data})
             
    } catch (error) {
        console.log(error.message);
        
    }
  
}
module.exports={Form}