'use strict';

angular.module('filters').filter('datetime', function($filter)
{
 return function(input)
 {
  if(input == null){ return ""; } 
 
  var _date = $filter('date')(new Date(input),
                              'dd-mm-yyyy dd:mm:ss');
 
  return _date;

 };
});