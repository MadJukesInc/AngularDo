'use strict';

/**
 * @ngdoc service
 * @name clientApp.User
 * @description
 * # User
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('User', function ($resource) {
    return $resource('http://localhost:8080/api/users/:id');
  });
