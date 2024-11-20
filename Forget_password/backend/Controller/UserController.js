
const UserModel = require("../Model/UserModel");
const bcrypt = require('bcrypt')
const NodeMiler = require("nodemailer")

const otpGenerator = require('otp-generator')
 let OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false , lowerCaseAlphabets:false});
// console.log(OTP)

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body
        let data = await UserModel.findOne({ email: email })
        console.log(email);
        console.log(data);
        if (data) {
            console.log("User Already Register")
        }
        else if (!data) {
            bcrypt.hash(password, 10, async (error, hash) => {
                await UserModel.create({
                    username,
                    email,
                    password: hash
                })
            })
            res.send({ msg: "user register" })
        }
        else {
            console.log("data not found")
        }

    } catch (error) {
        console.log(error)
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email);
        
        let data = await UserModel.findOne({ email: email });

        console.log(data);
        
        if (data) {
            console.log(data.password);
            console.log(password);
            bcrypt.compare(password, data.password, async (error, result) => {
                if (result) {
                    console.log(result);
                    res.send({ msg: "User Loging Successfully" })
                }
                else if (error) {
                    console.log(error)
                }
                else {
                    console.log("User not Login")
                    res.send({ msg: "User not login" })
                }

            })
        }
        else {
            console.log("user not login")
        }

    } catch (error) {
        console.log(error)
    }

}
const OTP_SAVE = {
  
}
const Forget = async(req,res) =>{
 try {
    const {email} = req.body

    let data = await UserModel.findOne({email : email})
    if(data)
    {
        OTP_SAVE[email] = OTP
        console.log(OTP_SAVE[email] = OTP)
        console.log(OTP_SAVE)
        const transpoter = NodeMiler.createTransport({
            service : "gmail",
            auth : {
                user : "multiera96@gmail.com",
                pass : "ncso flgd vyyj ngyh"
            }
        })
        let mailotp = {
            from : "multiera96@gmail.com",
            to : email,
            subject : "Forget Password",
            text : `Forget Password On OTP ${OTP}`
        }
        transpoter.sendMail(mailotp,(error,info)=>{
            if(error)
            {
                console.log(error)
            }
            if(info)
            {
                res.send({msg : "OTP genrated successfully"})
            }
            console.log(info.messageId);
            
        })
    }
    else if(!data)
    {
        console.log("user not found")
    }
    
 } catch (error) {
    console.log(error)
 }
}
const change_pass = async(req,res) =>{
    try {
        const {email,otp,newpass} = req.body
       
        if(OTP_SAVE[email] = otp )
        {
           bcrypt.hash(newpass,10,async(err,hash)=>{
            if(hash)
            {

                await UserModel.updateOne({email},{password : hash})
                res.send({msg : "user forget password successfully"})
            }
            else if(err)
            {
                console.log(err)
            }
            else{
                console.log("user data not found")
            }
            })
        }
    } catch (error) {
        console.log(error)
    }
 }


module.exports = { signup, login ,Forget , change_pass }