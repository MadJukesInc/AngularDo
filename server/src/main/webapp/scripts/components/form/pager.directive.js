/* globals $ */
'use strict';

angular.module('serverApp')
    .directive('serverAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
