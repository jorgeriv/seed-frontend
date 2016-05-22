'use strict';
function mainCtrl($scope){
  $scope.title = 'My app';
}

angular('myApp')
  .controller('mainCtrl', ['$scope', mainCtrl]);
