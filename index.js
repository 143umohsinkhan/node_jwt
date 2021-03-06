const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./route/user");


InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use("/user",user);

app.get("/",(req,res)=>{
    res.json({message:"API Working"});
});

app.listen(PORT,(req,res)=>{
    console.log("server is runing " + PORT );
});