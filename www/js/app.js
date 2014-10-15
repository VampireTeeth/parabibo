'use strict';

angular.module('parabibo', ['ionic', 'firebase','parabibo.controller', 'parabibo.service'])
.run(function($ionicPlatform) {
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
      templateUrl: 'templates/tabs.html'
    })
    .state('app.posts', {
      abstract: true,
      url: '/posts',
      views: {
        'main': {
          template: '<ion-nav-view></ion-nav-view>'
        }
      }
      
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'settings': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
    .state('app.posts.index', {
      url: '',
      views:{
        '': {
          templateUrl: 'templates/posts.html',
          controller: 'PostsCtrl'
        }
      }
    })
    .state('app.posts.detail', {
      url: '/:postId',
      views: {
        '':{
          templateUrl: 'templates/post-detail.html',
          controller: 'PostDetailCtrl'
        }
      }

    });
  $urlRouterProvider.otherwise('/posts');
});
