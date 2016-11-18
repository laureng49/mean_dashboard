var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	answer: { type: String, required: true},
	rank: { type: Number},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_topic: {type: Schema.Types.Mixed, ref: 'Topic'},
	_comments: [{type: Schema.Types.Mixed, ref: 'Comment'}]
})

mongoose.model('Answer', AnswerSchema);
