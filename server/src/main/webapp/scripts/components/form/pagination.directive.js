/* globals $ */
'use strict';

angular.module('serverApp')
    .directive('serverAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
