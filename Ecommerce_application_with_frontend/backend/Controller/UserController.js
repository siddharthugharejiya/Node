const CategoryModel = require("../Model/Catrgory_Model");
const UserModel = require("../Model/UserModel");
const jwt = require("jsonwebtoken")
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

const login = async(req,res) =>{
       const {email , password} = req.body
       console.log(email , password);
       
        const userdata = await UserModel.findOne({email : email})
        console.log(`data of user ${userdata.data}`)
        
        // if(!userdata)
        // {
        //   res.send({msg : "User Not register"})
        // }
        // if(userdata.password !== password ){
        //  res.send({msg : "Password is Wrong"})
        // }
        // const token = jwt.sign({userId : userdata._id, userRole : userdata.role},"SID")
        // res.send({msg : "user login successfully",token : token})
}
const getall_data = async(req,res)=>{
        const data = await CategoryModel.find().populate("categoryes")
        console.log(data)
        res.send({data})
        
}
module.exports={Form,getall_data ,login}