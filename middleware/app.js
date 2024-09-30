const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("/product",(req,res)=>{
    res.send("product page")
})


app.listen(9595,()=>{
    console.log("server is running on 9595")
})