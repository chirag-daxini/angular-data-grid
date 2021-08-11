'use strict';

angular.
  module('datagridApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        otherwise('/users');
    }
  ]);
