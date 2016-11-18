
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($httpProvider, $routeProvider) {
$httpProvider.interceptors.push(
  function($q, $location) {
  return {
      'responseError':function(rejection){
      if (rejection.status == 401){
          $location.url('/');
      }
      return $q.reject(rejection);
  }
};
});
  $routeProvider
  .when('/dashboard',{
      templateUrl: 'assets/partials/dashboard.html',
      controller: 'userController',
      controllerAs: "meep"
  })
  .when('/',{
      templateUrl: 'assets/partials/login.html',
      controller: 'userController'
  })
  .when('/addtopic',{
      templateUrl: 'assets/partials/dashboard.html',
      controller: 'topicController',
      controllerAs: "meep"
  })
  .when('/show/:id', {
    templateUrl: 'assets/partials/show.html',
    controller: 'showController',
    controllerAs: "meep"
  })
  .when('/topics/:id', {
    templateUrl: 'assets/partials/topics.html',
    controller: 'showtopicController'
  })
    .otherwise({
      redirectTo: '/'
    });
});
