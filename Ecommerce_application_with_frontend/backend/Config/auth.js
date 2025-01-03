const jwt = require("jsonwebtoken");

const validation = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(`Received Token: ${token}`);

  if (token) {
    try {
      const extractedToken = token.split(" ")[1];
      console.log(`Extracted Token: ${extractedToken}`);

      const decoded = jwt.verify(extractedToken, "SID");
      console.log("Decoded Token:", decoded);

      req.user = { userId: decoded.userId, role: decoded.role };
      console.log("req.user:", req.user); // Log as an object, not as part of a string

      next();
    } catch (error) {
      console.error("Token Verification Error:", error.message);
      res.status(401).send({ msg: "Invalid Token" });
    }
  } else {
    console.error("Authorization header is missing.");
    res.status(401).send({ msg: "You are not logged in" });
  }
};

const Auth = (req, res, next) => {
  console.log("req.user:", req.user);

  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).send({ data: "Unauthorized" });
  }
};

module.exports = { validation, Auth };
