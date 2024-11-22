const UserModel = require("../Model/UserModel")
const bcrypt = require('bcrypt')
const Register = async(req,res) =>{
       const { username,email,password } = req.body
        const data = await UserModel.findOne({email : email})
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
                await UserModel.create({
                    username,
                    email,
                    password : hash
                })
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
       console.log(data.password)
       bcrypt.compare(password,data.password,async(error,result)=>{
        if(error)
        {
            res.send({msg : {error}})
        }
        else if(result)
        {
            res.send({msg : "User Login SuccessFully"})
        }
        else{
            res.send({msg : "Incorret email or password"})
        }
       }) 
}
module.exports ={ Register , Login}