const jwt = require("jsonwebtoken");

const authenti = (req, res, next) => {
  let token = req.headers.authorization;

  console.log("Received token:", token);

  if (token && token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  if (token) {
    try {
      const decode = jwt.verify(token, "blog");
      req.user = { userId: decode.userId }; 
      console.log("Decoded userId:", req.user.userId);
      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      res.status(401).send("Invalid or expired token");
    }
  } else {
    res.status(401).send("Authorization token is missing");
  }
};

module.exports = authenti;
