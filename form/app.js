const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("form.ejs")
})

app.post("/",(req,res)=>{
       console.log(req.body);
})
app.listen(9595,()=>{
    console.log("server is runnig on 95959 port");
    
})