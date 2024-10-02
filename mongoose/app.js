const mongoose = require('mongoose')


const getdata = async() =>{
     const result = await mongoose.connect('mongodb://localhost:27017/e-commerce')
    console.log(result)


}
getdata()