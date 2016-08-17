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
    .when('/', {
      templateUrl: 'templates/main/index.html',
      controllerAs: 'postIndexCtrl',
      controller: 'PostIndexController'
    })
    // Routes to POST //
    .when('/posts', {
      templateUrl: 'templates/main/index.html',
      controllerAs: 'postIndexCtrl',
      controller: 'PostIndexController'
    })
    .when('/posts/new', {
      templateUrl: 'templates/posts/new.html',
      controllerAs: 'postsNewCtrl',
      controller: 'PostsNewController'
    })
    .when('/posts/:id', {
      templateUrl: 'templates/posts/show.html',
      controllerAs: 'postsShowCtrl',
      controller: 'PostsShowController'
    })
    .when('/posts/:id/edit', {
      templateUrl: 'templates/posts/edit.html',
      controllerAs: 'postsEditCtrl',
      controller: 'PostsEditController'
    })
    .otherwise({redirectTo: '/'});


    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
