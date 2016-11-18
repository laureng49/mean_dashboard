var path = require('path');
var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var answers = require('../controllers/answers.js');

function loginAuthentication(req,res,next){
  if (req.session.userId){
    next();
  }else{
    res.status(401).send("User not found");
  }
}

module.exports = function(app){
  app.get('/', users.index);
  app.post('/create', users.create);
  app.post('/login', users.login);
  app.use(loginAuthentication);
  // app.get('/home', users.home);
  app.get('/dashboard', users.home);
  app.post('/addtopic', topics.addtopic);
  app.get('/topics', topics.index);
  app.get('/topics/:id', topics.showtopics);
  app.post('/topics/:id', answers.addanswer);
  app.get('/user/:id', users.show);
  // app.post('/message/:id/comments', comments.create);
  app.post('/logout', users.logout);
};
