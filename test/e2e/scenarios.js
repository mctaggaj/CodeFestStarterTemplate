"use strict";

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("my app", function() {

  browser.get("index.html");

  it("should automatically redirect to /home when location hash/fragment is empty", function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe("bootstrap", function() {

    beforeEach(function() {
        browser.get("index.html#/bootstrap");
    });


    it("should render bootstrap when user navigates to /bootstrap", function () {
      expect(element.all(by.css("[ng-view] h2")).first().getText()).
        toMatch("This is a Button");
    });

  });


  describe("angular", function () {

    beforeEach(function() {
        browser.get("index.html#/angular");
    });


    it("should render angular when user navigates to /angular", function () {
      expect(element.all(by.css("[ng-view] h2")).first().getText()).
        toMatch("Data binding");
    });

  });

  describe("testing", function () {

      beforeEach(function () {
          // Navigate to the testing page.
          browser.get("index.html#/testing");
      });


      it("should display the default test result value", function () {
          // Find the element bound to the 'Result' property on the model, get it's text value and make sure it matches 'n/a'.
          expect(element(by.binding("Result")).getText()).toMatch("n/a");
      });

  });
});
