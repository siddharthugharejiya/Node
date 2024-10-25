const express = require("express");
const Connect = require("./server");
const UserRoute = require("./Route/UserRoute");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();



app.use("/", UserRoute);



app.listen(process.env.PORT, () => {
  console.log("Server is running on Port");
  Connect();
});
