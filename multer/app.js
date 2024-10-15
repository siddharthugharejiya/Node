const express = require('express')
const connect = require('./model/Connect')
const UserModel = require('./model/UserSchema')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const app = express()


app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname,"public/image"));

const store = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,path.join(__dirname,"public/image"))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage:store})
app.get("/",(req,res)=>{
      res.render("form.ejs")
})
app.get("/data",upload.single('image'),async(req,res)=>{
  let data= await UserModel.find()
//   console.log(data);
  res.render('data.ejs',{data})
  
})
app.get('/delete/:id',async(req,res)=>{
      const {id} = req.params
      const data =  await UserModel.findById(id)
      if(req.file)
        {
         await UserModel.findByIdAndDelete(id);
          const image_path = path.join(__dirname,"public/image",data.image)
          fs.unlinkSync(image_path)
      }
      else{
        await UserModel.findByIdAndDelete(id);
      }
      res.redirect('/data')
})
app.get("/edit/:id",async(req,res)=>{
    const {id} = req.params
   let data= await UserModel.findById(id)
   console.log(data);
   res.render('edit',{data})
})
<<<<<<< HEAD
app.post(("/edit/:id",upload.single("image"),async(req,res)=>{
    const {id} = req.params
    const data = await UserModel.findById(id)
           const image_path = path.join(__dirname,'../multer/public/image',data.image)
     fs.unlinkSync(image_path)
   console.log(req.file);
   
     if (req.file) {
        const d = await UserModel.findByIdAndUpdate(id, {
=======


app.post("/form", upload.single('image'), async(req, res) => {
    await UserModel.create({  
       ...req.body,
       image:req.file.filename
    })
res.redirect("/data")
});

app.post("/edit/:id", upload.single('image'), async (req, res) => {
    const { id } = req.params;
    let data = await UserModel.findById(id);
    if (req.file) {
        const image_path = path.join(__dirname, "public/image", data.image);
        if (fs.existsSync(image_path)) {
            fs.unlinkSync(image_path);
        }
        await UserModel.findByIdAndUpdate(id, {
>>>>>>> bdd68595a620772523bba337d4cf85a596774847
            ...req.body,
            image: req.file.filename
        })
    } else {
        await UserModel.findByIdAndUpdate(id, {
            ...req.body
        });
<<<<<<< HEAD
    } else {
        await UserModel.findByIdAndUpdate(id, req.body);
    }
    
        res.redirect("/data")
    
}))
app.post("/form", upload.single("image"), async(req, res) => {
         await UserModel.create({  
            ...req.body,
            image:req.file.filename
         })
    res.redirect("/data")
=======
    }

    res.redirect("/data");
>>>>>>> bdd68595a620772523bba337d4cf85a596774847
});

app.listen(9595,()=>{
    console.log("Server is running on 9595 port")
    connect()
})