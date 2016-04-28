var app = angular.module('myApp', ['ngRoute']);
console.log("working");
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/hilary', {
      templateUrl: 'views/hilary.html',
      controller: 'HilarController',
      controllerAs: 'hilary'
    })
    .when('/donald', {
      templateUrl: 'views/donald.html',
      controller: 'DonaldController',
      controllerAs: 'donald'
    })
    .when('/ted', {
      templateUrl: 'views/ted.html',
      controller: 'TedController',
      controllerAs: 'ted'
    });

  $locationProvider.html5Mode(true);

}]);

app.controller('HomeController', function(){
this.message="This is the home page";
});
app.controller('HilaryController', function(){

});
app.controller('DonaldController', function(){

});
app.controller('TedController', function(){

});
