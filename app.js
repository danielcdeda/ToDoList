const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var today = new Date;
    var currentDay = today.getDay()
    var day = "";

    if (currentDay == 6 || currentDay == 0) {
        day = "descansar!"
    }
    else {
        day = "trabalho!"
    }
    
    res.render("list", {kindOfDay: day})
});

app.listen(2048, function(){
    console.log("working on port 2048!")
})