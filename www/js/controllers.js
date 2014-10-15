'use strict';


angular.module('parabibo.controller', [])
.controller('PostsCtrl', function($scope, Posts){
  var posts = Posts.all();
  $scope.posts = posts;
})
.controller('PostDetailCtrl', function($scope, $stateParams, Posts){
  console.log($stateParams.postId);
//  $scope.post = Posts.byId($stateParams.postId);
})
.controller('SettingsCtrl', function($scope){});
