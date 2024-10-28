const express = require('express')
const UserRoute = require('./route/UserRoute')
const Connect = require('./Config/Server')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const UserModel = require('./model/UserModel')
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:"sid"
}))
app.use(passport.initialize())
app.use(passport.session())
app.use("/",UserRoute)
passport.use(new LocalStrategy(
    async(username,password,done)=>{
     let data = await UserModel.findOne({username : username})
     console.log(data);
     
     if(!data)
     {
        return done(null,false,{msg:"user not register"})
     }
     if(data.password !=  password)
     {
        return done(null,false,{msg:"password wrong"})
     }
      done(null,data)
    }   
))
passport.serializeUser((user,done)=>{
    done(null,user._id)
})
passport.deserializeUser(async(id,done)=>{
  let data=await UserModel.findById(id)
  done(null,data)
})
app.listen(process.env.PORT,()=>{
    console.log("server is running")
    Connect()
})