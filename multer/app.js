const express = require('express');
const coll = require('./model/Connect');
const app = express();
const multer = require('multer');
const path = require('path'); 
const UserModel = require('./model/UserSchema');
const  mongoose  = require('mongoose');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,path.join(__dirname,'../multer/public/image'));

    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); 
    }
});
// console.log(path.join(__dirname,"./public/image"))

const upload = multer({storage: storage});

app.get("/", (req, res) => {
    res.render('form.ejs');
});
app.post("/form", upload.single("image"), async(req, res) => {
         await UserModel.create({
           
            image:req.file.filename
         })
         
    res.redirect("/")
});


app.listen(9595, () => {
    console.log("Server running on 9595");
    coll()
});
