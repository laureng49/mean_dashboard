myApp.controller('showtopicController', ['userFactory', '$location', '$routeParams', showtopicController]);

function showtopicController(userFactory, $location, $routeParams){
  var _this = this;

  userFactory.showtopics($routeParams.id, function(data){
    _this.topic = data;
  });
  // function setusers(data){
  //   _this.users = data;
  //   _this.user = {};
  // }

  // userFactory.getusers();
  // function showtopics(){
  //   userFactory.showtopics($routeParams.id, function(data){
  //     _this.topics=data;
  //   })
  // }
 
   function getanswers(){
    userFactory.getanswers($routeParams.id, function(data){
      _this.topic=data;
    })
  }
  getanswers();

   this.showtopics = function(){
   userFactory.showtopics($routeParams.id, function(data){
   if(data.hasOwnProperty('errors')){
     _this.showtopicErrors = data.errors;
     console.log(data.errors);
   } else {
     console.log('made it to the showtopic method')
     $location.path('/topics/:id');
   }
 })
 };
   this.addanswer = function(topicId){
    console.log('hi')
    console.log(topicId)
    console.log(this.newanswer)
    userFactory.addanswer(topicId, this.newanswer, function(data){
      if(data.hasOwnProperty('errors')){
        _this.commentErrors = data.errors;
        console.log(data.errors);
      } else {
          getanswers();
      }
    })
  }
  
};
