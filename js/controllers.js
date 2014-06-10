'use strict';

/* Define Controllers Here */

var appModule = angular.module('myApp.controllers', []);

/* Controller for the application */
appModule.controller('AppController', function ($scope, $route) {


});

/* Controller for the Home page */
appModule.controller('HomeController', function ($scope) {
    $scope.WelcomeMessage = "<CODEFEST/> Welcome!"
});

/* Controller for the Bootstrap Examples page */
appModule.controller('BootstrapExamplesController', function ($scope) {
});

/* Controller for the Angular Examples page */
appModule.controller('AngularExamplesController', function ($scope) {
});


/* Controller for the Getting Started page */
appModule.controller('GettingStartedController', function ($scope) {
});

/* Controller for the Testing page */
appModule.controller('TestController', function ($scope) {
    $scope.Result = "n/a";
    $scope.TestMe = function () {
        $scope.Result = "Success!";
    };
});