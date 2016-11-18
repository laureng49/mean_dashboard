
myApp.controller('userController', ['userFactory', '$location', userController]);

function userController(userFactory, $location){
  var _this = this;
  // function setusers(data){
  //   _this.users = data;
  //   _this.user = {};
  // }

  // function getusers(){
  //   userFactory.getusers(function(data){
  //     _this.users=data;
  //   })
  // }
  // getusers();


  this.adduser = function(){
    userFactory.adduser(this.user, function(data) {
    if(data.hasOwnProperty('errors')){
      _this.regErrors = data.errors;
      console.log(data.errors);
    } else {
        $location.path('/');
      }
    })
  }
  this.show = function(){
    userFactor.show(this.user, function(data){
     $location.path('/show')
    })
  }

  this.loginuser = function(){
    userFactory.loginuser(this.user, function(data){
    if(data.hasOwnProperty('errors')){
      _this.loginErrors = data.errors;
      console.log(data.errors);
    } else {
      $location.url('/dashboard');
    }
  })
};
}
