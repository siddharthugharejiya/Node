const Auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("successfully login")
        next()
    } else {
        console.log("faild login")
        res.redirect("/login");
    }
}

module.exports = Auth;