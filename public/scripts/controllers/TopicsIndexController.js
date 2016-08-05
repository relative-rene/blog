angular
  .module('blog')
  .controller('TopicsIndexController', TopicsIndexController);

  TopicsIndexController.$inject = ['$http'];
  function TopicsIndexController ($http) {
    var vm = this;
    vm.newTopic = {};
    console.log("in the topics index controller");
    $http({
      method: 'GET',
      url: '/api/topics'
    }).then(function successCallback(response) {
      vm.topics = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

    vm.createTopic = function () {
      $http({
        method: 'POST',
        url: '/api/topics',
        data: vm.newTopic,
      }).then(function successCallback(response) {
        vm.topics.push(response.data);
      }, function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
    };

    vm.editTopic = function (topic) {
      $http({
        method: 'PUT',
        url: '/api/topics/'+topic._id,
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
        url: '/api/topics/'+ topic._id
      }).then(function successCallback(json) {
        var index = vm.topics.indexOf(topic);
        vm.topics.splice(index,1);
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };

  }
