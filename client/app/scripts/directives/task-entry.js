'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:taskEntry
 * @description
 * # taskEntry
 */
angular.module('clientApp')
  .directive('taskEntry', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log(attrs);
        element.text('this is the taskEntry directive');
      }
    };
  });
