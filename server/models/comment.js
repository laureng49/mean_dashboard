var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
	comment: { type: String, required: true},
	_answer: {type: Schema.Types.Mixed, ref: 'Answer'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('Comment', CommentSchema);
