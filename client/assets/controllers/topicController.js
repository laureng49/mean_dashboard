myApp.controller('topicController', ['userFactory', '$location', topicController]);

function topicController(userFactory, $location){
  var _this = this;
  // function setusers(data){
  //   _this.users = data;
  //   _this.user = {};
  // }

  // userFactory.getusers();
  function getTopics(){
    userFactory.getTopics(function(data){
      _this.topics=data;
    })
  }
  getTopics();

  this.addtopic = function(){
    userFactory.addtopic(this.topic, function(data) {
      if(data.hasOwnProperty('errors')){
        _this.topicErrors = data.errors;
        console.log(data.errors);
      } else {
          getTopics();
        }
    })
  };
  this.addComment = function(topicId){
    userFactory.addComment(this.comment[topicId], topicId, function(data){
      if(data.hasOwnProperty('errors')){
        _this.commentErrors = data.errors;
        console.log(data.errors);
      } else {
          getTopics();
      }
    })
  }

};
