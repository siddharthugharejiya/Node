const Auth = (req,res,next)=>{

    if(req.cookies && req.cookies.login){
         console.log(`Cookies Is ${req.cookies.login}`)
         next()
    }
    else{
        console.log("User not loggin")
        res.redirect("/user/login")
    }
}
module.exports=Auth