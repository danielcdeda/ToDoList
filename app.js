const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    var today = new Date;

    if (today.getDay() == 6 || today.getDay() == 0) {
        res.send("Ae, é final de semana!")
    }

    else {
        res.send("Dia de trabalho!")
    }
});

app.listen(2048, function(){
    console.log("working on port 2048!")
})