const mongoose = require('mongoose')

const collection = async() =>{
      await mongoose.connect()
}

console.log(collection);

