var lessMiddleware = require('less-middleware');
var routes = require('./routes/index');

var express = require('express');
var app = express();


//set view engine to jade rendering
app.set('view engine', 'jade');

//compile less to css
app.use(lessMiddleware(__dirname + '/public'));

//server static assets from public
app.use(express.static(__dirname + '/public'));

//add routes
routes(app);

var server = app.listen(3000, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)

})
