var express = require('express');
var app = express();
var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('node_modules'));

app.get("/", function(req,res,next){
    res.send("Success");
});

app.get("/routing", function(req,res,next){
    res.send("Routing Success!");
});
app.listen(port, function(err) {
    if(err){
        throw err;
    }
    console.log("Server is running on " + port);
})