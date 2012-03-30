if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {
  var multiply = function(a, b) {
    return a * b;
  };
  return multiply;
});
