const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req,res) =>{
    res.send("hello");
})

app.listen(4000, ()=>{
    console.log(`Express Server is running on ${PORT}`)
})