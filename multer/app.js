const express = require('express');
const connect = require('./model/Connect');
const UserModel = require('./model/UserSchema');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "public/image"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: store });

app.get("/", (req, res) => {
    res.render("form.ejs");
});

app.get("/data", upload.single('image'), async (req, res) => {
    let data = await UserModel.find();
    res.render('data.ejs', { data });
});

app.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const data = await UserModel.findById(id);
    if (data.image) {
        const image_path = path.join(__dirname, "public/image", data.image);
        if (fs.existsSync(image_path)) {
            fs.unlinkSync(image_path);
        }
    }
    await UserModel.findByIdAndDelete(id);
    res.redirect('/data');
});

app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const data = await UserModel.findById(id);
    res.render('edit', { data });
});

app.post("/form", upload.single('image'), async (req, res) => {
    await UserModel.create({
        ...req.body,
        image: req.file.filename
    });
    res.redirect("/data");
});

app.post("/edit/:id", upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const data = await UserModel.findById(id);
    if (req.file) {
        const image_path = path.join(__dirname, "public/image", data.image);
        if (fs.existsSync(image_path)) {
            fs.unlinkSync(image_path);
        }
        await UserModel.findByIdAndUpdate(id, {
            ...req.body,
            image: req.file.filename
        });
    } else {
        await UserModel.findByIdAndUpdate(id, {
            ...req.body
        });
    }
    res.redirect("/data");
});

app.listen(9595, () => {
    connect();
    console.log("Server is running on port 9595");
});
