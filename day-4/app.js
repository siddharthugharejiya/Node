const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid'); 
const port = 9595;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs",{arr});
});

let arr = [];


app.get('/signup', (req, res) => {
    res.render("signup.ejs",);
});


app.post('/signup', (req, res) => {
    let { email, password } = req.body;
    let obj = {
        id: uuidv4(),  
        email,
        password
    };
    arr.push(obj);
    res.redirect("/login"); 
});


app.get('/login', (req, res) => {
    res.render("login.ejs");
});

app.post("/login_data",(req,res)=>{
     let {email,password}=req.body
     let data = arr.filter((el)=>{
         return el.email === email && el.password === password
     })
     if(data.length)
     {
        console.log(data);
        
        res.redirect("/")

     }
     else{
        res.send("Login Unsuccefull")
     }
})

app.listen(port, () => {
    console.log("Running the server on port", port);
});
