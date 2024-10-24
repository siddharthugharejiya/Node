const express = require('express');
const UserRoute = require('./UserRoutes/UserRoutes');
const Connect = require('./Config/Server');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
require('dotenv').config();
const app = express();
const cookie = require('cookie-parser');
const UserModel = require('./Model/UserModel');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "sid"
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    async function (username, password, done) {
        let data = await UserModel.findOne({ username });
        console.log(data);
        
        if (!data) {
            return done(null, false, { msg: "Data Not Found" });
        }
        if (data.password !== password) {
            return done(null, false, { msg: "Password Not Found" });
        }
        return done(null, data);
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use("/user", UserRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
    Connect();
});
