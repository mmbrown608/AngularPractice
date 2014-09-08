 'use strict';
 
 /* Controllers */

var ticketsApp = angular.module('ticketsApp', []);

ticketsApp.controller('TeamListCtrl', function($scope) {
  $scope.teams = [
    {'name': 'Detroit Lions',
     'snippet': 'NFL'},
    {'name': 'Cleveland Cavaliers',
     'snippet': 'NBA'},
    {'name': 'Houston Rockets',
     'snippet': 'NBA'}
  ];
});
