angular
  .module('blog')
  .controller('TopicsEventsShowController', TopicsEventsShowController);

TopicsEventsShowController.$inject = ['$http', '$routeParams'];

function TopicsEventsShowController ($http, $routeParams) {
  var vm = this;
  vm.newEvent = {};

  $http({
    method: 'GET',
    url: '/api/topics/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.topic = json.data;
    vm.github_link = json.data.github_link;
    console.log(json.data);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createEvent = function (event) {
    console.log(event);
    $http({
      method: "POST",
      url: '/api/topics/'+$routeParams.id+'/events/',
      data: vm.newEvent
    }).then(function successCallback (response) {
      vm.topic.events.push(response.data);
    }, function errorCallback (response) {
      console.log('There was an error posting the data', response);
    });
  };

  vm.deleteEvent = function (event) {
    console.log(event);
    $http({
      method:'DELETE',
      url: '/api/topics/'+routeParams.id+'/events/'
    });
  };
}
