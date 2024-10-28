const express = require('express')
const Connect = require('./Config/Server')
const UserRoute = require('./Route/UserRoute')
const app = express()
const session = require('express-session')
const passport = require('passport')
const Usermodel = require('./Model/UserModel')
const LocalStrategy = require('passport-local').Strategy

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'));
app.use(session({
  secret: "sid"
}));
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(
  async (username, password, done) => {
      let data = await Usermodel.findOne({ username: username });
      if (!data) {
          return done(null, false, { msg: "User not Registered" });
      }
      if (data.password !== password) {
          return done(null, false, { msg: "Password invalid" });
      }
      return done(null, data);
  }
));
passport.serializeUser(async(user,done)=>{
        done(null,user.id)
})
passport.deserializeUser(async(id,done)=>{
   let data= await Usermodel.findById(id)
  done(null,data)
})
app.use("/",UserRoute)
app.listen(9595,()=>{
    console.log("Server is running on port ")
    Connect()
})