const UserModel = require("../Model/Usermodel")

const form_Route = async(req,res) =>{
       let d =await UserModel.create(req.body)

       console.log(d); 
       res.send("data add",{msg:"data add"})
} 
const Login_route = async(req,res)=>{
        let {email,password}=req.body
         let data = await UserModel.findOne(email,password)
         if(!data)
         {
                res.send({msg:"Email Not Registore"})
         }
         if(data && data.password != password)
         {
                res.send({msg : "Password Wrong"})
         }
         res.send({msg:"User login Successfully"})
}

module.exports={form_Route,Login_route}