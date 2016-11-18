var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// build your user schema and add it to the mongoose.models
var userSchema = new mongoose.Schema({
  first: {
   type: String,
   required: true,
   trim: true,
  },
  last: {
   type: String,
   required: true,
   trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
 password: {
  type: String,
  required: true,
  minlength: 8,
  maxlength: 32,
  validate: {
    validator: function( value ) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
    },
    message: "Password failed validation, you must have at least 1 number, uppercase and special character"
  }
},
birthday: {
  type: String,
  required: true,
  trim: true
},
// timestamps: {
//   createdAt: 'created_at',
//   updatedAt: 'updated_at'
// },
topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
_answers: [{type: Schema.Types.Mixed, ref: 'Answer'}],
_comments: [{type: Schema.Types.Mixed, ref: 'Comment'}],
posts: { type: Number}
});


mongoose.model('User', userSchema);
