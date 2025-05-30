const express = require("express");
const router = express.Router();

//rotte crud per i post

app.get('/posts', (req, res)=>{
    console.log("elenco post")
})

app.get('/pizzas/:id',(req, res)=>{
    console.log(req)
    console.log("post con id")
    res.send("dettaglio post")
})

module.exports=router;