const jwt = require('jsonwebtoken');
const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token);
        const decode = jwt.verify(token,"SID")
        req.body.userId = decode.userId
        console.log(req.body.userId);
        next()
    } catch (error) {
        console.log(error)
    }

    
} 

module.exports = Auth