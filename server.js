var express = require('express');

// app setup
var app = express();
var port = 8080;

// setup the app middlware
app.use(express.static('./public'));

app.all('*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(port, function() {
	console.log('Server up and running on port: ', port);
});