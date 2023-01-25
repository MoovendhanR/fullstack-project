const express= require("express");
const mongoose= require("mongoose");
const connect = require("./config/db");
const userController = require("./controllers/User.controller.js")

const app = express();
app.use(express.json());

app.use("/users",userController)






mongoose.set("strictQuery",false)
app.listen(5000,async()=>{
  await connect();
    console.log("listening on port 5000")
})