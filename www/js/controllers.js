'use strict';


angular.module('parabibo.controller', [])
.controller('PostsCtrl', function($scope, $ionicModal, Posts){
  $scope.data = {};
  var posts = Posts.all();
  $scope.data.posts = posts;
  console.log(posts);
  $scope.clearFilter = function() {
    $scope.data.query = '';
  };
//  $scope.showPostDetails = function(post) {
//    console.log("Post " + post.id);
//    $ionicModal.fromTemplateUrl('templates/post-details.html', {
//      scope: $scope,
//      animation: 'slide-in-up'
//    }).then(function(modal){
//      $scope.data = {
//        post: post
//      };
//      $scope.modal = modal;
//      $scope.openModal= function() {
//        $scope.modal.show();
//      };
//      $scope.closeModal = function() {
//        $scope.modal.hide();
//      };
//      //Cleanup the modal when we're done with it!
//      $scope.$on('$destroy', function() {
//        $scope.modal.remove();
//      });
//      // Execute action on hide modal
//      $scope.$on('modal.hidden', function() {
//        // Execute action
//      });
//      $scope.openModal();
//    });
//  };
})
.controller('PostDetailCtrl', function($scope, $stateParams, Posts){
  console.log($stateParams.postId);
  var post = Posts.byId($stateParams.postId);
  $scope.data = {post: post};
  console.log(post);
  //  $scope.post = Posts.byId($stateParams.postId);
})
.controller('SettingsCtrl', function($scope){});
