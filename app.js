angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouteProvider',
function($stateProvider, $urlRouteProvider) {
    
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
    
    $urlRouteProvider.otherwise('home');
}])
.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope',
  'posts', 
  function($scope, posts) {
    $scope.test = 'Hello world!';
    
    $scope.posts = posts.posts;
    
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];
    $scope.addPost = function() {
      if($scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title, 
        upvotes: 0,
        link: $scope.link
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);