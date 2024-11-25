const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).send({ msg: "User not authorized" });
  }

  try {
    const decoded = jwt.verify(token, 'SID');
    req.body.userId = decoded.userid
    next();
  } catch (error) {
    return res.status(401).send({ msg: "Invalid or expired token" });
  }
};

module.exports = Auth;
