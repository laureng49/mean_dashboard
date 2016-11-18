console.log('users controller');

var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');

function answersController(){
	this.create = function(req,res){
		var newComment = new Answer(req.body);
		newAnswer._user = req.session.userId;
		newAnswer._topic = req.params.id;
		newAnswer.save(function(err,results){
			if(err){
				res.json(err)
			}else{
				console.log('added a comment')
				Message.findOne({_id: req.params.id}).exec(function(err, message){
					if(err){
						res.json(err)
					}else{
						message.comments.push(newComment._id)
						message.save(function(err,results){
							if(err){
								res.json(err)
							}else{
								console.log('we made it fam')
								res.sendStatus(200);
							}
						})
					}
				});
			}
		});
	};
	this.addanswer = function(req,res){
		console.log('made it to addanwer method')
		console.log(req.body)
		var newAnswer = new Answer(req.body);
		newAnswer._user = req.session.userId;
		newAnswer._topic = req.params.id;
		newAnswer.save(function(err, results){
			if(err){
				res.json(err);
			}else {
				Topic.findOne({_id:req.params.id}).exec(function(err, topic){
					console.log('**************')
					console.log(results);
					console.log('**************')
					console.log(newAnswer);
					topic._answers.push(results._id);
					topic.save(function(err, info){
						if(err){
							res.json(err);
						}else {
							res.sendStatus(200);
						}
					});

				});
				
			}

		});

	}
};

module.exports = new answersController(); // what does this export?
