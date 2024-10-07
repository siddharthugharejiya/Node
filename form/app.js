const express = require("express");
const connect = require("./server");
const Usermodel = require("./Model/userSchema");

const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("form.ejs");
});

app.get("/data", async (req, res) => {
    const data = await Usermodel.find();
    res.render("data.ejs", { data });
});

app.post("/", async (req, res) => {
    await Usermodel.create(req.body);
    res.redirect("/data");
});

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Usermodel.findByIdAndDelete(id);
    res.redirect("/data");
});
 


app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).send("Invalid ID format");
    }
    try {
        const data = await Usermodel.findById(id);
        if (!data) {
            return res.status(404).send("User not found");
        }
        res.render("edit.ejs", { data });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/edit/:id", async(req, res) => {
     let data=await Usermodel.findByIdAndUpdate(req.params.id, req.body);
     res.redirect("/data");
});

app.listen(9595, async() => {
    console.log("Server is running on port 9595");
    await connect();
});
