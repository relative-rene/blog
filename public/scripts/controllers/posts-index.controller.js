  PostsIndexController.$inject = ['$http'];
  function PostsIndexController ($http) {
    var vm = this;
    vm.posts = [];

    query();

    // app.get('/api/posts', controllers.posts.index);
    function query() {
      $http({
        method: 'GET',
        url: '/api/posts'
      }).then(function successCallback(response) {
        vm.posts = response.data;
      }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
      });
    }
  }
