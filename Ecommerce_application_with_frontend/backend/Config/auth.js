const jwt = require("jsonwebtoken")
const validation = (req,res,next) =>{
    const token = req.headers.authorization;
      if(token)
      {
        let decode = jwt.verify(token,"SID")
        console.log(decode);
        
        req.user = decode
        next()  

    }
      else{
        res.send({msg : "Your Not Login "})
      }
}
module.exports={validation}