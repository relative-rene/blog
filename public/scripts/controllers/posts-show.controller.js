PostsIndexController.$inject = ['$http'];
function PostsShowController ($http) {
  var vm = this;
  vm.post = {};

//  app.get('/api/posts/:Id', controllers.posts.show);
  var id = $routeParams.id;
  get();

  vm.get = function (){
    $http({
      method: 'SHOW',
      url: '/api/posts',
      data: vm.Post,
    }).then(function successCallback(res) {
      vm.posts.push(res.data);
    }, function errorCallback(res) {
      console.log('There was an error posting ');
    });
  };
}
