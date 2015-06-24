'use strict';

angular.module('serverApp')
    .controller('TaskController', function ($scope, Task, User, ParseLinks) {
        $scope.tasks = [];
        $scope.users = User.query();
        $scope.page = 1;
        $scope.loadAll = function() {
            Task.query({page: $scope.page, per_page: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.tasks = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();

        $scope.showUpdate = function (id) {
            Task.get({id: id}, function(result) {
                $scope.task = result;
                $('#saveTaskModal').modal('show');
            });
        };

        $scope.save = function () {
            if ($scope.task.id != null) {
                Task.update($scope.task,
                    function () {
                        $scope.refresh();
                    });
            } else {
                Task.save($scope.task,
                    function () {
                        $scope.refresh();
                    });
            }
        };

        $scope.delete = function (id) {
            Task.get({id: id}, function(result) {
                $scope.task = result;
                $('#deleteTaskConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Task.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteTaskConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $('#saveTaskModal').modal('hide');
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.task = {title: null, completed: null, id: null};
            $scope.editForm.$setPristine();
            $scope.editForm.$setUntouched();
        };
    });
