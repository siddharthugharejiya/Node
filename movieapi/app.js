const express = require('express')
const { form_post } = require('./Controller/UserController')
// const { moviedata } = require('./Model/UserModel')
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.get(, async (req, res) => {
    res.render("form.ejs")
})

app.post("/",form_post)
app.listen(9595, () => {
    console.log("Server is running pn 9595 port")
})