myApp.controller('homeController', ['userFactory', '$location', homeController]);

function homeController(userFactory, $location){
  var _this = this;
  // function setusers(data){
  //   _this.users = data;
  //   _this.user = {};
  // }
  // this.users = {};
  // this.user = {};


  function getusers(){
    userFactory.getusers(function(data){
      _this.users=data;
    })
  }
  getusers();

  this.logout=function(){
    userFactory.logout(this.user, function(data){
      _this.users=data;
      $location.path('/');


    })
  }

  userFactory.home( function(user){
    _this.user = user;
  });


  }
