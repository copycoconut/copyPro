module.exports = function(app) {
	var user = require('../controllers/user.controller');
	app.route('/signup')
		.get(user.renderSignup);
	app.post('/login', user.login);
	app.post('/logout', user.logout);
	app.route('/user')
		.post(user.create)
		.get(user.list);
	//console.log(user.create);
};