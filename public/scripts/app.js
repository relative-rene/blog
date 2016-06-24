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
      templateUrl: 'templates/profiles_show',
      controllerAs: 'profilesShowCtrl',
      controller: 'ProfilesShowController'
    })
    .when('/events', {
      templateUrl: 'templates/profileBlogs',
      controllerAs: 'profilesEventsIndexCtrl',
      controller: 'ProfilesEventsIndexController'
    })
    .when('/events/:id', {
      templateUrl: 'templates/profileBlog',
      controllerAs: 'profilesEventsShowCtrl',
      controller: 'ProfilesEventsShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
