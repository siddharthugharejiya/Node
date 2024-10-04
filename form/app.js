const express = require("express")
const connect = require("./server")
const Usemodel = require("./Model/userSchema")
const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("form.ejs")
})

app.get("/data", async (req, res) => {
    const data = await Usemodel.find()
    console.log(data);
    
    res.render("data.ejs", { data })
})

app.post("/", async (req, res) => {
    let data = await Usemodel.create(req.body)

    res.redirect("/data")
})

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params
    console.log(id);
    await Usemodel.findByIdAndDelete(id)
    console.log("delete successfully");
    res.redirect("/data")
})

app.get("/edite/:id", async (req, res) => {
    const { id } = req.params
    let data = await Usemodel.findByIdAndUpdate(id);
    res.render("edite.ejs", { data })
    res.redirect("/data",{data})
})


app.listen(9595, () => {
    connect()
    console.log("server is running on 9595 port");
})
