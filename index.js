var express = require('express');
var app = express();
var path = require('path');

// serve up static files
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app/elements'));
app.use(express.static(__dirname + '/app/images'));
app.use(express.static(__dirname + '/app/js'));
app.use(express.static(__dirname + '/app/styles/css'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
