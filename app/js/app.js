'use strict';

/* App Module */

var courtana = angular.module('courtana', [
  'ngRoute',
  'courtanaAnimations',
  'courtanaControllers',
  'courtanaFilters',
  'courtanaServices',
  'ngStorage'
]);

courtana.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
      }).
        when('/library_login', {
          templateUrl: 'partials/library_login.html',
          controller: 'Library_loginController'
        }).
        when('/library_home', {
          templateUrl: 'partials/library_home.html',
          controller: 'Library_homeController'
        }).


        otherwise({
        redirectTo: '/home'
      });
  }]);
