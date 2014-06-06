'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('TestController', function ($scope) {
    $scope.Result = "n/a";
    $scope.TestMe = function () {
        $scope.Result = "Success!";
    };
})
;