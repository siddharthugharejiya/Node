const express = require('express');
const app = express();


app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

app.get('/pro',(req,res)=>{
    const data ={
        email :"sid@test.com",
        password:"12345",
        email:"god@test.com",
        password:"123"
    }
      res.render('pro.ejs',{data})
      res.end()
}).listen(9595,()=>{
console.log("server is running 9595");

})