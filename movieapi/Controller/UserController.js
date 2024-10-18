const mongoose = require('mongoose');
const moviedata = require('../Model/UserModel');
const form_render =  async (req, res) => {
    res.render("form.ejs")
}
const form_post = async (req, res) => {    
 let d=await moviedata.create(req.body)
 console.log(d);
    res.redirect("/data")
}
const data_get=async(req,res)=>{
    let d=await moviedata.find();
       res.render("data",{d})
   }
const edit_get=async(req,res)=>{
    const {id} = req.params
  let data=await moviedata.findById(id)
  res.render("edit",{data})
}
const delete_get=async (req, res) => {
    const { id } = req.params;
    try {
        await moviedata.findByIdAndDelete(id);
        res.redirect("/data");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}

const edit_post=async (req, res) => {
    await moviedata.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/data");

}
module.exports = { form_post,form_render,data_get, edit_get,delete_get,edit_post}