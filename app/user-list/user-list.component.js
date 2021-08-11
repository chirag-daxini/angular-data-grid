'use strict';

angular.
  module('userList').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['User',
      function UserListController(User) {
        this.users = User.query();
        this.orderProp = 'Name';
      }
    ]
  });
