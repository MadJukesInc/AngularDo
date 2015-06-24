'use strict';

angular.module('serverApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('task', {
                parent: 'entity',
                url: '/task',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Tasks'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/task/tasks.html',
                        controller: 'TaskController'
                    }
                },
                resolve: {
                }
            })
            .state('taskDetail', {
                parent: 'entity',
                url: '/task/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Task'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/task/task-detail.html',
                        controller: 'TaskDetailController'
                    }
                },
                resolve: {
                }
            });
    });
