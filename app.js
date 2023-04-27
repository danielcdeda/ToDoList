const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send("Hello!")
})

app.listen(2048, function(){
    console.log("working on port 2048!")
})