const express = require('express')
const app = express()
app.set('views engine','ejs')
app.use(express.urlencoded({extended:true}))
app.listen(9595,()=>{
    console.log("Server is runnig on 9595")
})