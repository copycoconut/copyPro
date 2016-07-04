exports.render = function(req, res) {
	 // body...
	 res.render('index', {
	 	title: 'สวัสดีชาวโลก',
	 	username: req.user ? req.user.username : ''
	 });
};