const express = require("express");
const app = express();

let name = "Priyanshu"

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get("/getname",(req,res)=>{
    res.send({name});
})

app.get("/updatename",(req,res)=>{
    name= "Priyanshu"
    res.send({name});
})

const port = process.env.PORT || 5001;

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`)
})