'use strict';

angular.module('filters').filter('customcurrency', function($filter)
{
    return function(input) {
        return '£'+input;
      }
});