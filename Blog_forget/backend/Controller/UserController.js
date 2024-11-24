const bcrypt = require('bcrypt')
const UserModel = require('../Model/UserModel')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    const { username, email, password } = req.body
    //    let data = await UserModel.find({email : email})
    //    if(data)
    //    {
    //     console.log("User Already register")
    //   }
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.log(err)
        }
        if (hash) {
            await UserModel.create({
                username,
                email,
                password: hash
            })
            res.send({ msg: "Register successfully" })

        }
    })
}
const Login = async(req,res) => {
    const {email,password}=req.body
    const data = await UserModel.findOne({email : email}) 
    if(data)
    {
        const token = jwt.sign({userid : data._id},"SID")
        console.log(token);
        // res.send({"msg" : "Login successfull" ,token : token})
        bcrypt.compare(password,data.password,(err,result)=>{
            if(err)
            {
               console.log(err)
            }
            if(result)
            {
               console.log({result : token})
            }
            res.send({msg : "user login"})
           })
    }
    else{
        console.log("Email or Password invalid")
    }
    
    
      
}

module.exports = { register , Login}