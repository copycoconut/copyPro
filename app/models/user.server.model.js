var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	fristname: String,
	lastname: String,
	username: {
		type: String, 
		unique: true, 
		index: true ,
		trim: true,
		reqired: 'username is required'
	},
	email: {
		type: String, 
		unique: true 
	},
	password: String,
	salt:{
		type: String
	},
	provider:{
		type: String,
		required:'Provider is required'
	},
	providerId: String,
	providerData: {}
});

UserSchema.pre('save',function(next){
	if(this.password){
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'),'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

UserSchema.methods.hashPassword = function (password) {
	 /* body... */ 
	 return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function (password) {
	 /* body... */ 
	 return this.password === this.hashPassword(password);
};

mongoose.model('User', UserSchema);