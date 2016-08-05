angular
  .module('blog')
  .controller('TopicsEventsIndexController', TopicsEventsIndexController);

  TopicsEventsIndexController.$inject = ['$http'];
  function TopicsEventsIndexController ($http) {
    var vm = this;
    vm.newTopic = {};

    $http({
      method: 'GET',
      url: '/api/topics/'+ topic._id + '/events',
    }).then(function successCallback(response) {
      vm.topicsEvents = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

    vm.createTopic = function () {
      console.log("clicked create topic");
      $http({
        method: 'POST',
        url: '/api/topics/'+ topic._id,
        data: vm.newTopic,
      }).then(function successCallback(response) {
        vm.topicsEvents.push(response.data);
      }, function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
    };

    vm.editTopic = function (topic) {
      $http({
        method: 'PUT',
        url: '/api/topicsEvents/'+topic._id,
        data: topic
      }).then(function successCallback(json) {
        // don't need to do anything!
      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    };

    vm.deleteTopic = function (topic) {
      $http({
        method: 'DELETE',
        url: '/api/topicsEvents/'+ topic._id
      }).then(function successCallback(json) {
        var index = vm.topicsEvents.indexOf(topic);
        vm.topicsEvents.splice(index,1);
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };

  }
