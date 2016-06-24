angular
  .module('blog')
  .controller('ProfilesEventsShowController', ProfilesEventsShowController);

ProfilesEventsShowController.$inject = ['$http', '$routeParams'];

function ProfilesEventsShowController ($http, $routeParams) {
  var vm = this;
  vm.newEvent = {};

  $http({
    method: 'GET',
    url: '/api/profiles/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.profile = json.data;
    vm.github_link = json.data.github_link;
    console.log(json.data);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createEvent = function (event) {
    console.log(event);
    $http({
      method: "POST",
      url: '/api/profiles/'+$routeParams.id+'/events/',
      data: vm.newEvent
    }).then(function successCallback (response) {
      vm.profile.events.push(response.data);
    }, function errorCallback (response) {
      console.log('There was an error posting the data', response);
    });
  };

  vm.deleteEvent = function (event) {
    console.log(event);
    $http({
      method:'DELETE',
      url: '/api/profiles/'+routeParams.id+'/events/'
    });
  };
}
