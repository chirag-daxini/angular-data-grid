'use strict';

angular.
  module('datasource').
  factory('User', ['$resource',
    function($resource) {
      return $resource('datasource/users.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
