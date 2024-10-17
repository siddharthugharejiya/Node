const mongoose = require('mongoose');
const moviedata = require('../Model/UserModel');
const form_post = async (req, res) => {
    
 let d=await moviedata.create(req.body)
 console.log(d);
    res.redirect("/data")
}

module.exports = { form_post }