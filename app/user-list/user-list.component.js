'use strict';

angular.
  module('userList').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['User','$scope', function UserListController(User, $scope) {
      $scope.users = User.query();
      this.orderProp = 'Name';
        $scope.resetBalance = function () {
          $scope.users.forEach(function(u) {
            u.balance = 0;
          });
          }
      }
    ]
  });
