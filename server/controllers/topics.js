console.log("topics Controller");

var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User')

function topicsController(){
  this.home = function(req,res){
    Topic.find({}, false, true).populate('_comment').exec(function(err, topics) {
    res.json(topics);
  })
  };
  this.addtopic = function(req,res){
    var newTopic = new Topic(req.body)
    newTopic._user = req.session.userId;
    newTopic.save( function(err, result) {
      if(err) {
        console.log('unable to add topic');
      } else {
        User.findOne({_id: req.session.userId}).exec(function(er, user){
          if(err){
            console.log('you done fucked up')
          }
          else{
            console.log(newTopic)
            console.log(user._id)
            user.topics.push(newTopic._id)
            user.save(function(err, result){
              if(err){
                res.json(err)
              }
              else{console.log('yas')
                res.json(result)
              }
              })
            }
          })
        }
   
      })

  };
  this.showtopics = function(req, res){
  Topic.findOne({_id: req.params.id}).populate('_answers').exec(function(err, topic){
    if(err){
      res.status(500).send('fuck')
    } else {
      console.log('niggga we made it')
      console.log(topic)
      // topic.populate({path: '_answers', populate: {path: '_user'}, populate: {path: 'comments', populate: {path: '_user'}}}).populate('_user', function(err, topic){
        // if(err){
        //   return res.json(err);
        // }
        console.log(topic)
        res.json(topic);
      }
    })

  }

  this.index = function(req,res){
    Topic.find({}).populate('_user').populate({path:'comments', model:'Comment', populate:{path:'_user', model:'User'}}).exec(function(err,topics){
      if(err){
        console.log('unable to grab topics');
        res.sendStatus(404);
      }else{
        console.log('foundem')
        res.json(topics);
      }
    })
  }
};

module.exports = new topicsController();
