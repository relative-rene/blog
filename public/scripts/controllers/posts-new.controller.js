  PostsNewController.$inject = ["$http", "$location"];
  function PostsNewController ($http, $location) {
    var vm = this;
      vm.post = {};

//  app.get('/api/posts, controllers.posts.create);
  vm.create = function() {
    $http({
      method:'POST',
      url: '/api/posts',
      data: vm.post,
    }).then(function onSuccess(res) {
      vm.posts.push(res.data);
    }, function errorCallback(res) {
      console.log('There was an error creating', res);
    });
  };
}
