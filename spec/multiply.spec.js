if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../lib/multiply.js"], function(multiply) {
  describe("multiply", function() {
    it("multiplies two numbers", function() {
      expect(multiply(2, 5)).toEqual(10);
    });
  });
});
