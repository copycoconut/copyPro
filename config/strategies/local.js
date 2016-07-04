var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');
module.exports = function() {
	 // body...  
	 passport.use(new LocalStrategy(function(username, password, done) {
	 	 // body...  
	 	 User.findOne({username: username},function (err,user) {
	 	 	 /* body... */ 
	 	 	 if (err){ return done(err);}
	 	 	 if(!user || !user.authenticate(password)){
	 	 	 	return done(null, fales,{
	 	 	 		massge: 'ยูสเซอร์เนม หรือพาสเวิสด์ ไม่ถูกต้อง'
	 	 	 	});
	 	 	 }
	 	 });
	 }));
};