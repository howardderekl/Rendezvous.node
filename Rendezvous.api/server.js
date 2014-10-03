// server.js

var express = require('express');
var http = require('http');
var path = require('path');
var controllers = require('./controllers');

var app = express();

app.set('port', 3000);

// opt into services
//app.use(express.urlencoded());
// needed for api calls
//app.use(express.json());
//app.use(express.methodOverride());

controllers.init(app);

http.createServer(app).listen(3000, function(){
    console.log('Express server listening on port ' + app.get('port'));
});
