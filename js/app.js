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

    // Define routes here.

    $routeProvider.when('/home', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeController',
        title: 'Home'
    });

    $routeProvider.when('/bootstrap', {
        templateUrl: 'templates/bootstrap.tpl.html',
        controller: 'BootstrapExamplesController',
        title: 'Bootstrap'
    });

    $routeProvider.when('/angular', {
        templateUrl: 'templates/angular.tpl.html',
        controller: 'AngularExamplesController',
        title: 'Angular'
    });

    $routeProvider.when('/gettingstarted', {
        templateUrl: 'templates/gettingstarted.tpl.html',
        controller: 'GettingStartedController',
        title: 'Getting Started'
    });

    $routeProvider.when('/testing', {
        templateUrl: 'templates/testing.tpl.html',
        controller: 'TestController',
        title: 'Testing'
    });

    $routeProvider.otherwise({ redirectTo: 'home' });

}]);
