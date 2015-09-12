'use strict';

/* App Module */

var courtana = angular.module('courtana', [
  'ngRoute',
  'courtanaAnimations',
  'courtanaControllers',
  'courtanaFilters',
  'courtanaServices'
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

      otherwise({
        redirectTo: '/home'
      });
  }]);
