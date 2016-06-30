exports.render = function(req, res) {
	 // body...
	 var isLoggedIn = false;

	 if(typeof req.session.remember !== 'undefined'){
	 	isLoggedIn = req.session.remember;
	 }
	 
	 res.render('index', {
	 	'title' : 'Fuck you Baby',
	 	'message' : 'Do you Want'
	 });
};