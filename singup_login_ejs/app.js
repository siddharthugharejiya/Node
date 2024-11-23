const express = require('express');
const UserRoute = require('./UserRoutes/UserRoutes');
const Connect = require('./Config/Server');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieparser = require('cookie-parser');
require('dotenv').config();
const app = express();
const UserModel = require('./Model/UserModel');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "sid"
}));

app.use(passport.initialize());
app.use(passport.session());

const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    async function (username, password, done) {
        let data = await UserModel.findOne({username:username} );
        if (!data) {
            return done(null, false, { msg: "Data Not Found" });
        }       
        if (data.password != password) {
            return done(null, false, { msg: "Incorrect Password" });
        }
        return done(null, data);
    }
));
passport.serializeUser((user,done)=>{
   done(null,user.id)
})

passport.deserializeUser(async (id, done) => {
   
        const user = await UserModel.findById(id);
        done(null, user);
  
});

app.use("/user", UserRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
    Connect();
});
