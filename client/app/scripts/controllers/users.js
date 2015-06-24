'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UsersCtrl', function ($scope, User) {
    var bindData = function () {
      User.query().$promise.then(function (result) {
        $scope.users = result;
      });
      $scope.newUser = {};
    };

    bindData();

    $scope.addUser = function () {
      var user = $scope.newUser;
console.log(user);
      //User.save(user).$promise.then(function () {
      //  bindData();
      //});
    };

  });
