const express = require('express'); 
const app = express();
console.log(app);

const arr ={
    "id" : "1",
    "item" : "items1"
}
app.get("/",(req,res)=>{
    res.send("hello world")

})
app.listen(9595,()=>{
    console.log("server is Running")
})
