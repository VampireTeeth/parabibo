'use strict';


var URL = 'https://blazing-inferno-3216.firebaseio.com';

angular.module('parabibo.service', [])
.factory('Posts', function($firebase){
  var ref = new Firebase(URL);
  console.log('$firebase(ref.child(phones))');

  return {
    all: function(){
      var sync = $firebase(ref.child('phones'));
      return sync.$asArray();
    },
    byId: function(id){
      var sync = $firebase(ref.child('phones'));
      return sync.$asArray().$getRecord(id);
    }
  };
});
