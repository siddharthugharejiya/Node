const jwt = require('jsonwebtoken')
const Auth = (req,res,next) =>{
     let token = req.headers.authorization.split(" ")[1]
     if(token)
     {
        const decode = jwt.verify(token,"SID")
        req.body.userId = decode.userid
        next() 
     }
     else{
        res.send({msg : "user not authorize"})
     }
}
module.exports=Auth