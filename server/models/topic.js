
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _answers: [{type: Schema.Types.Mixed, ref: 'Answer'}],
  category: { type: String, required: true},
  topic: { type: String, required: true},
  description: { type: String, required: true},
  count: { type: Number}
});

mongoose.model('Topic', topicSchema);
