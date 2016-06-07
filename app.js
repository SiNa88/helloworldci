var express = require('express');
var http = require('http');

var app = express();

app.get('/', function (request, response, next) {
	response.send('hello docker ci');
});

var httpServerPort = process.env.PORT || 8080;
http.createServer(app).listen(httpServerPort, function () {
	console.log('Listening on port ' + httpServerPort);
});
