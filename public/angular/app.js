var app = angular.module('daycare', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    // state
    .state('main', {
      url: "/",
      templateUrl: "pages/main.html"
    })
    // state;

    $locationProvider.html5Mode(true);

})