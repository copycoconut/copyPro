module.exports = function (app) {
	 /* body... */ 
	 var partial = require('../controllers/partial.server.controller');
	 app.get('/modules/:module/views/:partial', partial.render);
};