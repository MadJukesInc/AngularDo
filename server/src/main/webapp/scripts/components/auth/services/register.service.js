'use strict';

angular.module('serverApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


