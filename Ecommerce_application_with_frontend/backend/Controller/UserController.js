const CategoryModel = require("../Model/Catrgory_Model");
const UserModel = require("../Model/UserModel");
const jwt = require("jsonwebtoken")


const Form = async (req, res) => {
  try {
  
    const { username, email, password, role, secretkey } = req.body;
    console.log(req.body);
    
    if (role === "admin") {
      console.log(role);
      console.log(process.env.adminsecretkey)
      console.log(secretkey);
      if (process.env.adminsecretkey != secretkey) {
        return res.send({ msg: "You are not authorized" });
      }
      else{
        return res.send({msg : "Your Authorize"})
      }
    }
 const obj = {
  username,
   email,
    password,
     role : role,
   secretkey
 }

    const data = await UserModel.create(obj);
    console.log(data);
    return res.send({ data })

  } catch (error) {
    console.log(error.message);
    
  }
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(email, password);

   
     const userdata = await UserModel.findOne({ email });
     console.log("Found User:", userdata);
       

    if (!userdata) {
      return res.send({ msg: "User Not register" })
    }
    // if (userdata.password !== password) {
    //   return res.send({ msg: "Password is Wrong" })
    // }
    const token = jwt.sign({ userId: userdata._id, userRole: userdata.role }, "SID")
    console.log(token);

    return res.send({ msg: "user login successfully" ,token : token })
  }
  catch (error) {
    console.log(error);

  }
}
const getall_data = async (req, res) => {
  const data = await CategoryModel.find().populate("categoryes")
  console.log(data)
  res.send({ data })

}
module.exports = { Form, getall_data, login }