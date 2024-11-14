const UserModel = require("../Model/UserModel")
const bcrypt = require('bcrypt')
const signup = async(req,res) => {
    const {username,email,password} = req.body
 bcrypt.hash(password,10,async(error,hash)=>{
  console.log(hash);
  
          try {
              await UserModel.create({
                username,
                email,
                password : hash
              })
            
          } catch (error) {
            console.log(error)
          }
    })
}
module.exports={signup}