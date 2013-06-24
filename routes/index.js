
/*
 * Routes.
 */
var home = require('./home'),
	user = require('./user'),
	middleware = require('./middleware');

module.exports = function(app){
	app.get('/', home.index);
  	app.get('/error', middleware.error, home.index);
	app.get('/users', user.list);
};
