var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
	a1: { type: String, required: true },
	a2: { type: String },
	b1: { type: String, required: true },
	b2: { type: String },
	a_score: { type: String, required: true },
	b_score: { type: String, required: true },
	doubles: Boolean,
	created_user: { type: String, required: true },
	verified_user: { type: String, required: true },
	updated_user: { type: String, required: true },
	location: String,
	created_at: Date,
	updated_at: Date
});

var game = mongoose.model('game', gameSchema);

module.exports = game;