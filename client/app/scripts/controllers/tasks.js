'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TasksCtrl', function ($scope, Task) {
    var init = function () {
      Task.query(function (data) {
        $scope.tasks = data;
      });

      $scope.newTask = {};
    };

    init();

    $scope.addUser = function () {
      var task = $scope.newTask;
      task.owner = 1;
      task.completed = false;

      Task.save($scope.newTask);

      init();
    };

    $scope.resetTitle = function () {
      $scope.newTask = {};
    };
  });
