var User = require('mongoose').model('User');

exports.list = function(req, res, next) {
	 // body... 
	 User.find({}, function(err, users){
	 	if (err) {
	 		return next(err);
	 	}else{
	 		res.json(users);
	 	}
	 });
};

exports.create = function(req, res, next) {
	var user = new User(req.body);
	
	user.save(function(err) {
		if(err) {
			return next(err);

		} else {
			res.json(user);
		}
	});
};

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
};
exports.renderSignup = function(req, res) {
	res.render('signup', {
		title: 'ลงทะเบียน',
		message: req.flash('error')
	});
};

exports.signup = function(req, res, next) {
	 /* body... */ 
	if (!req.user){
		var user = new User(req.body);
		user.provider = 'local';
		user.save(function(err){
			if(err){
				var message = getErrorMessage(err);
				req.flash('error', message);
				return res.redirect('/signup');

			}

			req.login(user, function(err){
				if(err) return next(err);



				return res.redirect('/');
			});
		});


	} else {
		return res.redirect('/');
	}
	//console.log('ffffffff'+req.user);
};

var getErrorMessage = function (err) {
	 /* body... */ 
	var message = '';

	if(err.code){
		switch(err.code){
			case 11000:
			case 11001:
				message = 'username already exists';
			default:
				message = 'Somthing went wrong';
		}

	}else{
		for(var errName in err.errors){
			if(err.errors[errName].message){
				message = err.errors[errName].message;
			}
		}
	}
	return message;
};