PostsShowController.$inject = ['$http','$routeParams'];
function PostsShowController ($http, $routeParams) {
  var vm = this;
  vm.post = {};

//  app.get('/api/posts/:Id', controllers.posts.show);
    $http({
      method: 'GET',
      url: '/api/posts/' + $routeParams.id,
    }).then(function successCallback(res) {
      vm.post = res.data;
      vm.tags = res.data.tags;
      console.log(res.data);
    }, function errorCallback(res) {
      console.log('There was an error posting',res);
    });
}
