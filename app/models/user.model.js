var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	Username: {type: String, unique: true, index: true },
	Fristname: String,
	Lastname: String,
	Email: {type: String, unique: true },
	Password: String
});

mongoose.model('User', UserSchema);