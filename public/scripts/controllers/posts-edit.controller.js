  PostsEditController.$inject = ['$http'];
  
  function PostsEditController ($http) {
    var vm = this;
    vm.post = {};

  edit = function (post) {
    $http({
      method: 'PUT',
      url: '/api/posts/'+post._id,
      data: post
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  vm.deletePost = function (post) {
    $http({
      method: 'DELETE',
      url: '/api/posts/'+ post._id
    }).then(function successCallback(json) {
      var index = vm.posts.indexOf(post);
      vm.posts.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };

}
