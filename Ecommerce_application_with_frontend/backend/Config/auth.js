const jwt = require("jsonwebtoken")

const validation = (req, res, next) => {
  const token = req.headers.authorization
    console.log(token);
    
    if (token) {
        try {
            const extractedToken = token.split(" ")[1];
            console.log(`this is extractedToken ${extractedToken}`);
            
            let decode = jwt.verify(extractedToken, "SID")
            
            console.log(`Decoded Token: ${JSON.stringify(decode)}`);

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
    console.log(`User Role: ${req.user.userRole}`);
    if (req.user && req.user.userRole === "admin") {
        next();
    } else {
        res.status(403).send({ data: "Unauthorized" });
    }
}
module.exports = { validation, Auth }
