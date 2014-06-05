'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('MainController', function ($scope, $route) {
    $scope.$route = $route;
})
;