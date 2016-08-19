angular
  .module('blog')
  .controller('PostsNewController', PostsNewController);

  PostsNewController.$inject = ["$location"];
  function PostsNewController ($location,$http) {
    var vm = this;
    vm.create = createPost;
    vm.post = {};

//  app.get('/api/posts, controllers.posts.create);

  vm.create = function () {
    $http({
      method: 'POST',
      url: '/api/posts/:id',
      data: vm.Post,
    }).then(function successCallback(response) {
      vm.posts.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };
}
