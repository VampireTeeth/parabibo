'use strict';

angular.module('parabibo', ['ionic', 'firebase','parabibo.controller', 'parabibo.service'])
.run(function($ionicPlatform, $location) {
  $location.path('#/post')
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('app', {
    abstract: true,
    url: '',
    templateUrl: 'templates/main.html'
  })
  .state('app.post', {
    abstract: true,
    url: '/post',
  })
  .state('app.settings', {
    url: '/settings',
    views: {
      'main': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })
  .state('app.post.index', {
    url: '',
    views:{
      'main@app': {
        templateUrl: 'templates/posts.html',
        controller: 'PostsCtrl'
      }
    }
  })
  .state('app.post.details', {
    url: '/:postId',
    views: {
      'main@app':{
        templateUrl: 'templates/post-details.html',
        controller: 'PostDetailCtrl'
      }
    }

  });
  $urlRouterProvider.otherwise('/post');
});
