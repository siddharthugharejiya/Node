const UserModel = require("../Model/UserModel");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await bcrypt.hash(password, 10, async (error, hash) => {
            if(hash)
            {
                await UserModel.create({
                    username,
                    email,
                    password: hash
                })
            }
            else{
                console.log(error)
            }
         
        })
        res.send({ msg: "user register" })
    } catch (error) {
        console.log(error)
    }

};
const login = async (req, res) => {
    const { email, password } = req.body
    console.log(password);

    let data = await UserModel.findOne({ email })
    console.log(data)
    if (!data) {
        return res.send({ msg: "Invalid email or password" });
    }

    
    bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
            res.send({ msg: "user loging" })
        }
        else {
            res.send({ msg: "User not login" })
        }
    })
}
const change = async (req, res) => {
    const { email, CurrentPassword, NewPassword } = req.body
    console.log(email)
    console.log(CurrentPassword);
    console.log(NewPassword)
    try {
        const data = await UserModel.findOne({email:email})
        console.log(data.password)
        const matched = await bcrypt.compare(CurrentPassword,data.password)
        if(matched)
        {
         let Newhash=await bcrypt.hash(NewPassword,10)
         await UserModel.findOneAndUpdate(
            {email : email},
            {password : Newhash}
         )
         res.send({msg:"User Password chnage"})
        }
        else{
            console.log({msg:"User Password Not Matched"})
        }
        
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = { signup, login, change };
