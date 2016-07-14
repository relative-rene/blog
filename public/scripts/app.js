//Client-side JS front end routing for space

angular
  .module('blog', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/topics',
      controllerAs: 'topicsIndexCtrl',
      controller: 'TopicsIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/topics_show',
      controllerAs: 'topicsShowCtrl',
      controller: 'TopicsShowController'
    })
    .when('/events', {
      templateUrl: 'templates/topicEvents',
      controllerAs: 'topicsEventsIndexCtrl',
      controller: 'TopicsEventsIndexController'
    })
    .when('/events/:id', {
      templateUrl: 'templates/topicsEvents_show',
      controllerAs: 'topicsEventsShowCtrl',
      controller: 'TopicsEventsShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
