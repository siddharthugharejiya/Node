const Auth = (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
          
            console.log(`Cookies: ${JSON.stringify(req.cookies)}`);
            return next();
        } else {
            
            console.log("User not logged in");
            return res.redirect("/user/login");
        }
    } catch (error) {
        console.error("Error in Auth middleware:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = Auth;
