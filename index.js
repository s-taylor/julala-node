var express = require('express');
var app = express();

//set view engine to jade rendering
app.set('view engine', 'jade');

//server static assets from public
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('site/home', {});
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
