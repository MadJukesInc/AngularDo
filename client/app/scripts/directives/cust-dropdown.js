'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:custDropdown
 * @description
 * # custDropdown
 */
angular.module('clientApp')
  .directive('custDropdown', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the custDropdown directive');
      }
    };
  });
