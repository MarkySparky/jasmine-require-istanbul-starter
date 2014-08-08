"use strict";
define([], function() {
    /* jshint ignore:start */
    return {

        // Sums two numbers
        sum: function( a, b ) {
	  return a + b;
        }

        // Subtract `b` to `a`
      ,	subtract: function( a, b ) {
	  return a - b;
        }

        // Divide `a` by `b`
      ,	divide: function( a, b ) {
	  return a / b;
	}

	// Multiply `a` by `b`
      ,	multiply: function( a, b ) {
	  return a * b;
        }
    };

});