const express = require("express");
const Connect = require("./config/server");
const UserRoute = require("./Route/UserRoute");
const password = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const Usermodel = require("./Model/Userschema");
const passport = require("passport");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();

app.use(session({
  secret: "sid",
}));

app.use(passport.initialize()); 
app.use(passport.session())


password.use(new LocalStrategy(
   async (username, password, done) => {
    try {
      let data = await Usermodel.findOne({ username: username });
      console.log({ username: username }, data);
      
      if (!data) {
        return done(null, false, { msg: "User not registered" });
      }
      
      if (data.password !== password) {
        return done(null, false, { msg: "Invalid password" });
      }
      
      return done(null, data)
    } catch (err) {
      return done(err);
    }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);   
});

passport.deserializeUser(async (id, done) => {
  try {
    const data = await Usermodel.findById(id);
    done(null, data);    
  } catch (error) {
    done(error);
  }
});

app.use("/", UserRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  Connect();
});
