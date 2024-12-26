const jwt = require("jsonwebtoken")

const validation = (req, res, next) => {
  const token = req.headers.authorization;
    console.log(token);
    
    if (token) {
        try {
            let decode = jwt.verify(token, "SID")
            console.log(decode);
            
            req.user = decode
            next()
        } catch (error) {
            res.send({ msg: "Invalid Token" })
        }
    } else {
        res.send({ msg: "You are not logged in" })
    }
}

const Auth = (req, res, next) => {
    console.log(req.user);
    
    if (req.user && req.user.useRole === "admin") {
        next()
    } else {
        res.send({ msg: "Unauthorized" })
    }
}

module.exports = { validation, Auth }
