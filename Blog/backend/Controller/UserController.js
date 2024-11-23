const UserModel = require("../Model/UserModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const Register = async(req,res) =>{
       const { username,email,password } = req.body
        const data = await UserModel.findOne({email : email})
        console.log(data);
        
        if(data)
        {
            res.send({msg :  "User Already register please enter Other email"})
        }
        else if (!data)
        {
         await bcrypt.hash(password,10,async(error,hash)=>{
            if(error)
            {
                console.log(error)
            }
            else if(hash)
            {
           let add=await UserModel.create({
                    username,
                    email,
                    password : hash
                })
                console.log(add);
            }
            
            else {
             console.log("user not found")
            }
            })
            
        }
}
const Login = async(req,res) =>{
       const {email , password } = req.body
       const data =  await UserModel.findOne({email:email})
    //    console.log(data.password)
       bcrypt.compare(password,data.password,async(error,result)=>{
        if(error)
        {
            res.send({msg : {error}})
        }
        else if(result)
        {
            res.status(200).send({msg : "User Login SuccessFully"})
            
           const token = jwt.sign({userId : data._id },"SID")
        //    const token = jwt.sign({userid : data._id}, "SID")
           res.send({msg : token})
           
        }
        else{
            res.status(400).send({msg : "Incorret email or password"})
        }
       }) 
}
module.exports ={ Register , Login}