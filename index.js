const express=require("express");
const { connection } = require("./backend/config/db");
const { auth } = require("./backend/middleware/auth.middleware");
const { postRoute } = require("./backend/routes/post.route");
const { UserRoute} = require("./backend/routes/user.route");
const cors = require('cors');
require("dotenv").config();
const app=express();
app.use(express.json());
app.use("/user",UserRoute);
 
app.get("/", (req,res)=>{
    res.send("Welcome to home page");
})

app.use(auth)
app.use("/post", postRoute)

app.listen(process.env.port, async(req,res)=> {
        try {
           await connection
           console.log("Connected to DB ") 
        } catch (error) {
            console.log("Error while connecting");
            console.log(error)
        }  
     console.log("Server is running at PORT 8080 !");
})