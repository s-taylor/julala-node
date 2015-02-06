exports = module.exports = function(app) {

	app.get('/', function (req, res) {
		res.render('site/home', {});
	});

	app.get('/about', function (req, res) {
		res.render('site/about', {});
	});

	app.get('/calendar', function (req, res) {
		res.render('site/calendar', {});
	});

	app.get('/contact', function (req, res) {
		res.render('site/contact', {});
	});

	app.get('/japanese', function (req, res) {
		res.render('site/japanese', {});
	});

	app.get('/music', function (req, res) {
		res.render('site/music', {});
	});

}
