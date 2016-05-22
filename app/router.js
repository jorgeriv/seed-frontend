'use strict';
function router($routeProvider, $locationProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'app/components/home/template.html',
    controller: 'homeController'
  })
  .otherwise({
    redirectTo: '/home'
  });

  $locationProvider
  .html5Mode(true);
}
angular('MyApp')
  .config(['$routeProvider', '$locationProvider', router]);
