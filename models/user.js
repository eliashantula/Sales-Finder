const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	passwordHash: { type: String, required: true }
});

UserSchema.plugin(uniqueValidator);

UserSchema.virtual("password").set(
	function(value){this.passwordHash = bcrypt.hashSync(value, 8)
});


UserSchema.methods.validatePassword = function(password){
	return bcrypt.compareSync(password, this.passwordHash)
}



const User = mongoose.model("User",  UserSchema)


module.exports = User