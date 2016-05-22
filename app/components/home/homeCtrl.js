(function(){ 'use strict';
function ctrl($scope){
  $scope.title = 'My app';
}
  angular.module('myApp')
    .controller('homeController',['$scope', ctrl]);
}());
