const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    image: String,
    title: String,
    director: String,   
    category: String
})
const moviedata = mongoose.model("moviedata", Schema)
module.exports = moviedata
