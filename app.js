var express = require('express');
var http = require('http');

var app = express();

app.get('/', function (request, response, next) {
	response.send('who the heck is going for coffee?');
});

var httpServerPort = process.env.PORT || 8080;
http.createServer(app).listen(httpServerPort, function () {
	console.log('Listening on port ' + httpServerPort);
});
