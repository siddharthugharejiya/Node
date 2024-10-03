const express = require("express")

const connect = require("./server")
const usermodel = require("./Model/useSchema")
const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("form.ejs")
})

app.post("/",(req,res)=>{
       console.log(req.body);
       usermodel.create(req.body)

       res.render("form.ejs")
})
app.listen(9595,()=>{
    console.log("server is runnig on 95959 port");
    connect()
 
})