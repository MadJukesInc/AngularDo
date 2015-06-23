'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:custDropdown
 * @description
 * # custDropdown
 */
angular.module('clientApp')
  .directive('ngCustdropdown', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        console.log(attrs);

        element.text('this is the custDropdown directive');
      }
    };
  });
