const Auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log(`Cookies Is ${req.cookies.login}`);
        next();
    } else {
        console.log("User not logged in");
        res.redirect("/user/login");
    }
};

module.exports = Auth;
