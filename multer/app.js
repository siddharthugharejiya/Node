const express = require('express');
const coll = require('./model/Connect');
const app = express();
const multer = require('multer');
const path = require('path'); 

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public'); 
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post("/", upload.single('image'), (req, res) => {
    res.send("successfull")
});

app.get("/", (req, res) => {
    res.render('form.ejs'); 
});

app.listen(9595, () => {
    console.log("Server running on 9595");
    coll(); 
});
