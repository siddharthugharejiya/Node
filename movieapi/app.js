const express = require('express')
const { form_post } = require('./Controller/UserController')
const Connect = require('./Config/db')
const moviedata = require('./Model/UserModel')
// const { moviedata } = require('./Model/UserModel')
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.get("/", async (req, res) => {
    res.render("form.ejs")
})
app.get("/data",async(req,res)=>{
 let d=await moviedata.find();
//  console.log(d);
    res.render("data",{d})
})
app.get("/edit/:id",async(req,res)=>{
     const {id} = req.params
   let data=await moviedata.findById(id)
   res.render("edit",{data})
})
app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await moviedata.findByIdAndDelete(id);
        res.redirect("/data");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
app.post("/",form_post)
app.post("edit/:id",async(req,res)=>{
  let d=await moviedata.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/data")
})
app.listen(9595, () => {
    console.log("Server is running pn 9595 port")
    Connect()
})