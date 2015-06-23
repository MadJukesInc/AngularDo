'use strict';

angular.module('serverApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
