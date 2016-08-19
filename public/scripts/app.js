console.log('js running');
angular
  .module('blog', ['ngRoute'])

  //Posts CRUD controllers
  .controller('PostsIndexController', PostsIndexController)
  .controller('PostsShowController', PostsShowController)
  .controller('PostsNewController', PostsNewController)
  .controller('PostsEditController', PostsEditController)
  .config(config);
