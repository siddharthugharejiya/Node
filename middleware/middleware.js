const express = require('express');
const app = express();

// Middleware function to check if the user is logged in
const login = false;

const loginCheck = (req, res, next) => {
    if (login) {
        next(); // User is logged in, proceed to the next middleware or route handler
    } else {
        res.send("Not logged in"); // User is not logged in, send a response
    }
};

// Apply the loginCheck middleware to all routes
// app.use(loginCheck);

app.get("/",loginCheck, (req, res) => {
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.listen(9595, () => {
    console.log("Server is running on 9595");
});
