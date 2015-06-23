'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
