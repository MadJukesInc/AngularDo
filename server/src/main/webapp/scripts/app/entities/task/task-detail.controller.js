'use strict';

angular.module('serverApp')
    .controller('TaskDetailController', function ($scope, $stateParams, Task, User) {
        $scope.task = {};
        $scope.load = function (id) {
            Task.get({id: id}, function(result) {
              $scope.task = result;
            });
        };
        $scope.load($stateParams.id);
    });
