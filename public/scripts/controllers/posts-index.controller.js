  PostsIndexController.$inject = ['$http','$location'];
  function PostsIndexController ($http, $location) {
    var vm = this;
    vm.newPost = {};
    // app.get('/api/posts', controllers.posts.index);
    var query = function (){
      $http({
        method: 'GET',
        url: '/api/posts',
      }).then(function successCallback(res) {
        vm.posts = res.data;
      }, function errorCallback(res) {
        console.log('There was an error getting the data', res);
      });
    };
    query();

  }
