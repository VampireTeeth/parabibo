'use strict';


angular.module('parabibo.controller', [])
.controller('PostsCtrl', function($scope, $timeout, Posts){
  $scope.posts = [];
  $timeout(function(){
    Posts.all($scope.posts);
  })

})
.controller('SettingsCtrl', function($scope){});
