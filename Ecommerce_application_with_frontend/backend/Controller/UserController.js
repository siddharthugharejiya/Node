const CategoryModel = require("../Model/Catrgory_Model");
const UserModel = require("../Model/UserModel");
require('dotenv').config(); 


const Form = async(req,res)=>{
  const adminsecretkey = "123"
    console.log("Admin Secret Key from .env: ", adminsecretkey);
    try {
        const {username,email,password,role,secretkey}=req.body
        
        if (role === "admin") {
            if (adminsecretkey !== secretkey) {
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

const getall_data = async(req,res)=>{
        const data = await CategoryModel.find().populate("categoryes")
        console.log(data)
        res.send({data})
        
}
module.exports={Form,getall_data}