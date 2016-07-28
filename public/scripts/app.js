//Client-side JS front end routing for space
$(function(){
  console.log('app.js loaded');
});

angular
  .module('blog', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/newEvents', {
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
      templateUrl: 'templates/topicsEvents',
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
