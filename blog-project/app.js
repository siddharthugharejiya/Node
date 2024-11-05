const express = require('express')
const UserRoute = require('./Route/UserRoute')
const connect = require('./config/server')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const SignupModel = require('./model/authSchema')

const app = express()
require('dotenv').config()
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(session({
    secret : "sid"
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(
    async (username,password,done) =>{
     let data = await SignupModel.findOne({username:username})
     
     if(!data)
     {
     return done(null,false,{msg : "data not found"})
     }
     if(data.password != password)
     {
      return done(null,false,{msg : "invalid password"})
     }
     done(null,data)
    }
))

passport.serializeUser((user,done)=>{
    done(null,user._id)  
})

passport.deserializeUser(async(id,done)=>{
    let data = await SignupModel.findById(id)
      done(null,data)
})
app.use("/",UserRoute)
app.listen(process.env.PORT,()=>{
    console.log('Port is running')
    connect()
})