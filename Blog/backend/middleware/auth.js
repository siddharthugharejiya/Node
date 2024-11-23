const jwt = require("jsonwebtoken");

const authenti = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (token) {
    const decode = jwt.verify(token, "SID");
    req.body.userId = decode.userId;
    next();
  } else {
    res.send("your not login ");
  }
};

module.exports = authenti;
1