'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TasksCtrl', function ($scope, Task, User) {
    var bindData = function () {
      Task.query().$promise.then(function (result) {
        $scope.tasks = result;
      });
      User.query().$promise.then(function (result) {
        $scope.users = result;
      });

      $scope.newTask = {};
    };

    bindData();

    $scope.addTask = function () {
      var task = $scope.newTask;
      task.completed = false;
      task.owner = task.owner.id;

      Task.save(task).$promise.then(function () {
        bindData();
      });
    };
    $scope.resetTitle = function () {
      $scope.newTask = {};
    };
    $scope.$on('update', function () {
      $scope.$evalAsync(
        function () {
          bindData();
        }
      );
    });
  });
