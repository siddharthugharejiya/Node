const express = require('express');
const coll = require('./model/Connect');
const app = express();
const multer = require('multer');
const path = require('path'); 
const UserModel = require('./model/UserSchema');
const fs = require('fs')


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

const upload = multer({storage: storage});

app.get("/", (req, res) => {
    res.render('form.ejs');
});
app.get("/data",async(req,res)=>{
   let data= await UserModel.find()
   console.log(data);
   
    res.render('data.ejs',{data});
})

app.get("/delete/:id",async(req,res)=>{
      const {id} = req.params
      const data = await UserModel.findById(id)
      const image_path = path.join(__dirname,'../multer/public/image',data.image)
      console.log(image_path);
      await UserModel.findByIdAndDelete(id)
     
     fs.unlinkSync(image_path)
     res.redirect("/data")
})
app.get("/edit/:id",upload.single("image"),async(req,res)=>{
    const {id} = req.params
    const data = await UserModel.findById(id)
    const image_path = path.join(__dirname,'../multer/public/image',data.image)
     fs.unlinkSync(image_path)

     if (req.file) {
        const d = await UserModel.findByIdAndUpdate(id, {
            ...req.body,
            image: req.file.filename
        });
    } else {
        await UserModel.findByIdAndUpdate(id, req.body);
    }
    
    res.redirect('/data')
})
app.post("/form", upload.single("image"), async(req, res) => {
         await UserModel.create({  
            ...req.body,
            image:req.file.filename
         })
    res.redirect("/data")
});


app.listen(9595, () => {
    console.log("Server running on 9595");
    coll()
});
