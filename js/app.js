'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'templates/home.tpl.html' });
    $routeProvider.when('/bootstrap', { templateUrl: 'templates/bootstrap.tpl.html' });
    $routeProvider.when('/angular', { templateUrl: 'templates/angular.tpl.html' });
    $routeProvider.when('/getting-started', { templateUrl: 'templates/template.tpl.html' });
    $routeProvider.when('/testing', { templateUrl: 'templates/testing.tpl.html', controller: 'TestController' });

    $routeProvider.otherwise({ redirectTo: 'home' });

}]);
