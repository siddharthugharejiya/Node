const { MongoClient } = require("mongodb");
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true })); 

let arr = []
app.get("/", (req, res) => {
    res.render("index.ejs", { arr }); 
});

app.listen(9595, () => {
    console.log("Server connected on port 9595");
});

const database = "e-commerce";
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const getdata = async () => {

        const result = await client.connect(); 
        const db = result.db(database);
        const collection = db.collection('products'); 
        const response = await collection.find({}).toArray();
                arr = response; 
        console.log(arr); 
};

getdata(); 
