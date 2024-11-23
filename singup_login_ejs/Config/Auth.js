const Auth = (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            return next();
        } else {
            
            console.log("User not logged in");
            return res.redirect("/user/login");
        }
    } catch (error) {
        console.error(error);
      
    }
}
module.exports = Auth;
