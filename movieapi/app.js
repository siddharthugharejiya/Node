const express = require('express')
const { form_post, form_render, data_get, edit_get, delete_get, edit_post } = require('./Controller/UserController')
const Connect = require('./Config/db')

const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.get("/",form_render)
app.get("/data",data_get)
app.get("/edit/:id",edit_get)
app.get("/delete/:id",delete_get );
app.post("/",form_post)
app.post("/edit/:id", edit_post)
app.listen(9595, () => {
    console.log("Server is running pn 9595 port")
    Connect()
})