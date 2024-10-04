const express = require("express")
const connect = require("./server")
const Usemodel = require("./Model/userSchema")
const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("form.ejs")
})

app.post("/",async(req,res)=>{
      await Usemodel.create(req.body)
})
app.listen(9595,()=>{
    connect()
    console.log("server is runnig on 95959 port");
    
})