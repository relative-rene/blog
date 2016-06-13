//Client-side JS front end routing for space


angular
  .module('blog', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/profiles',
      controllerAs: 'profilesIndexCtrl',
      controller: 'ProfilesIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/profiles-show',
      controllerAs: 'profilesShowCtrl',
      controller: 'ProfilesShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
