'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TasksCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
