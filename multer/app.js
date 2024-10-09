const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('file');

app.get("/", (req, res) => {
    res.render('form.ejs');
});

app.post("/upload", upload, (req, res) => {
    if (!req.file) {
        return res.send('Please upload a file.');
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(9595, () => {
    console.log("Server is running on port 9595");
});
