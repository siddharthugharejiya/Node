const express= require('express')
const coll = require('./model/Connect')
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded({extends:true}))
app.get("/",(req,res)=>{
    res.render('form.ejs')
})


app.listen(9595,()=>{
    console.log("Server running on 9595")
    coll
})