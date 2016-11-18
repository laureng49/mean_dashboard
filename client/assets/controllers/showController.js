myApp.controller('showController', ['userFactory', '$location', '$routeParams', showController]);

function showController(userFactory, $location, $routeParams){
 var _this = this;

 function showusers(){
   userFactory.show($routeParams.id, function(data){
     _this.users=data;
   })
 }
 showusers();

 this.show = function(){
   userFactory.show(this.user, function(data){
   if(data.hasOwnProperty('errors')){
     _this.showErrors = data.errors;
     console.log(data.errors);
   } else {
     $location.path('/show');
   }
 })
 };

 userFactory.home( function(user){
   _this.user = user;
 });

 }