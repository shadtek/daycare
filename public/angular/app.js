var app = angular.module('daycare', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    // state
    .state('main', {
      url: "",
      templateUrl: "pages/main.html"
    })
    // state;
    // state
    .state('main.home', {
      url: "/",
      templateUrl: "pages/home.html"
    })
    // state;
    // state
    .state('main.pricing', {
      url: "/pricing",
      templateUrl: "pages/pricing.html"
    })
    // state;
    // state
    .state('main.food-menu', {
      url: "/food-menu",
      templateUrl: "pages/food-menu.html"
    })
    // state;
    // state
    .state('main.calendar', {
      url: "/calendar",
      templateUrl: "pages/calendar.html"
    })
    // state;
    // state
    .state('main.admin', {
      url: "/admin",
      templateUrl: "pages/admin.html"
    })
    // state;


    $locationProvider.html5Mode(true);

})