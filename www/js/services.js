'use strict';


var URL = 'https://blazing-inferno-3216.firebaseio.com';
angular.module('parabibo.service', [])
.factory('Posts', function($firebase){
  return {
    all: function(posts){
      var ref = new Firebase(URL);
      var phonesRef = ref.child('phones');
      phonesRef.on('child_added', function(snapshot){
        var phone = snapshot.val();
        console.log(phone);
        posts.push(phone);
      });
    }
  }

});
