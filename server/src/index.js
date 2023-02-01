const express= require("express");
const mongoose= require("mongoose");
const cors=require("cors");
const connect = require("./config/db");
const userController = require("./controllers/User.controller.js")
const notesController = require("./controllers/Notes.controller.js");
const authenticate = require("./middlewares/authenticate.middleware");


const app = express();
app.use(cors({
  origin:"*"
}))
app.use(express.json());

app.use("/users",userController)
app.use(authenticate)
app.use("/notes",notesController)







mongoose.set("strictQuery",false)
app.listen(5000,async()=>{
  await connect();
    console.log("listening on port 5000")
})