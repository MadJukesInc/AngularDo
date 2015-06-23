'use strict';

/**
 * @ngdoc service
 * @name clientApp.User
 * @description
 * # User
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('User', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
