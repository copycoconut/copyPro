var passport = require('passport');
var mongoose = require('mongoose');

module.exports = function() {
	 // body...  
	 var User = mongoose.model('User');

	 passport.serializeUser(function(user, done) {
	 	 // body...  
	 	 done(null, user.id);
	 });

	 passport.deserializeUser(function(id, done) {
	 	 // body...  
	 	 User.findOne({_id: id}, '-password -salt',function(err, user) {
	 	 	 // body...  
	 	 	 done(err, user);
	 	 });
	 });
	 require('./strategies/local.js')();
};