'use strict';

/**
 * @ngdoc service
 * @name clientApp.Task
 * @description
 * # Task
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('Task', function ($resource) {
    return $resource('http://localhost:8080/api/tasks/:id');
  });
