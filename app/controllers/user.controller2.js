exports.login = function(req, res){
	console.log(req.body);
	/*console.log('Email :' + req.body.email);
	console.log('Password : ' + req.body.password); */

	req.checkBody('email', 'invalid email').notEmpty().isEmail();
	req.sanitizeBody('email').normalizeEmail();
	var errors = req.validationErrors();
	if (errors) {
		res.render('index', {
			title: 'อีเมล์ไม่ถูกต้อง : ' + JSON.stringify(errors),
			isLoggedIn: false
		});
		return;
	}

	if (req.body.remember === 'remember') {
		req.session.remember = true;
		req.session.email = req.body.email;
	}

	res.render('index', {
		title: 'Logged In As ' + req.body.email,
		isLoggedIn: true
	});

};
exports.logout = function(req, res) {
	 // body...
	 req.session = null;
	 res.render('index', {
	 	title: 'กรุณาล๊อกอิน',
	 	isLoggedIn: false
	 });
}