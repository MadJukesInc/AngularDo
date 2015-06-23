'use strict';

/**
 * @ngdoc service
 * @name clientApp.Task
 * @description
 * # Task
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('Task', function () {
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
