(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  /**
   * Default array with regexp conditions
   * @type {RegExp[]}
   */
  var patterns = [/\d/, // Digits
  /[A-Z]/, // Uppercase letters
  /[\W_,!?@*\(\)]/, // Special characters
  /^.{8}/ // At least 8 characters
  ];
  /**
   * Checks the score of a password input string
   * against an array of regexp conditions
   *
   * @param  {String} pass - Password as a string
   * @param  {Array}  conditions - Array of Regular Expressions
   *
   * @return {Number}
   */

  var passScore = function passScore(pass) {
    var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : patterns;

    // Convert undefined password to string
    if (typeof pass === 'undefined') {
      pass = '';
    } // Convert everything to empty string


    try {
      pass = pass.toString();
    } catch (e) {
      // If null - convert to empty string
      pass = '';
    }

    return conditions.reduce(function (accumulator, pattern) {
      return accumulator + pattern.test(pass);
    }, 0);
  };

  var _default = passScore;
  _exports["default"] = _default;
});
