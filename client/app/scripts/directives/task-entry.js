'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:taskEntry
 * @description
 * # taskEntry
 */
angular.module('clientApp')
  .directive('taskEntry', function () {
    return {
      templateUrl: 'views/directives/task-entry.html',
      restrict: 'EA',
      transclude: true,
      scope: {
        task: '=',
        users: '='
      },
      controller: ['$scope', '$http', 'Task','User', function ($scope, $http, Task, User) {
        $scope.editingTitle = false;
        $scope.addingMember = false;
        $scope.isOwner = true;
        $scope.member = {};
        $scope.ownerName = '';


        var getOwnerName = function () {
          User.get({id: $scope.task.owner}, function (result) {
            $scope.ownerName =  result.username + ' (' + $scope.task.owner + ')';
          })
        };
        getOwnerName();

        var update = function () {
          $scope.$emit('update');
        };

        $scope.updateTitle = function () {
          Task.save($scope.task).$promise.then(function () {
            update();
          });
          $scope.editingTitle = false;
        };
        $scope.toggleTitleEdit = function () {
          $scope.editingTitle = true;
        };
        $scope.addMember = function () {
          $scope.task.members.push($scope.member.new.username);
          Task.save($scope.task);
          $scope.addingMember = false;
        };
        $scope.removeMember = function (member) {
          $scope.task.members = _.without($scope.task.members, member);
          Task.save($scope.task).$promise.then(function () {
            update();
          });
        };
        $scope.toggleAddMember = function () {
          $scope.addingMember = true;
        };
        $scope.deleteTask = function () {
          Task.delete($scope.task).$promise.then(function () {
            update();
          });
        };
        $scope.toggleCompleted = function () {
          Task.save($scope.task).$promise.then(function () {
            update();
          });
        };

      }]
    };
  });
