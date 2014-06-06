'use strict';

/* jasmine specs for controllers go here */

describe('TestController', function () {

    beforeEach(module('myApp.controllers'));

    it('should be defined', inject(function ($rootScope, $controller) {
        //spec body
        var scope = $rootScope.$new();
        var controller = $controller('TestController', { $scope: scope });
        expect(controller).toBeDefined();
    }));

    it('should have an initial value defaulted for the Result property', inject(function ($rootScope, $controller) {
        //spec body
        var scope = $rootScope.$new();
        var controller = $controller('TestController', { $scope: scope });        


        // Check the results. The controller will add the Result property to the scope.
        expect(scope.Result).toBeDefined();
        expect(scope.Result).toEqual("n/a");
    }));

    it('should set the value of the Result property', inject(function ($rootScope, $controller) {
        //spec body
        var scope = $rootScope.$new();
        var controller = $controller('TestController', { $scope: scope });

        // Call the TestMe() method. The controller will add this method to the scope.
        scope.TestMe();

        // Check the results.
        expect(scope.Result).toBeDefined();
        expect(scope.Result).toEqual("Success!");
    }));

});