
/**
 * Module dependencies.
 */

var express = require('express');
var controllers = require('./controllers');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Map the routes
controllers.init(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(1337, function(){
  console.log('Express server listening on port ' + app.get('port'));
});
