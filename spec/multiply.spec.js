var multiply = require("../lib/multiply.js");

describe("multiply", function() {
  it("multiplies two numbers", function() {
    expect(multiply(2, 5)).toEqual(10);
  });
});
