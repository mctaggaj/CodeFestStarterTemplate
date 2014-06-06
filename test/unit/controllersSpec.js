'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp.controllers'));
    it('should have a controller name MainController', inject(function ($rootScope, $controller) {
        //spec body
        var scope = $rootScope.$new();
        var mainController = $controller('MainController', { $scope: scope });
        expect(mainController).toBeDefined();
    }));

});
describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});