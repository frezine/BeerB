angular.module('starter.controllers', ['ionic', 'ionic-ratings'])

.controller('DashCtrl', function($scope) {})

// $scope.navTitle = "<img src=\"asset/sculpin.png\">"

// .controller('yourCtrl', function($scope) {
//
//   // set the rate and max variables
//   $scope.rate = 3;
//   $scope.max = 5;
//
// });

.controller('ControllerName', ['$scope', function($scope) {

      $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };

      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };

}])

.controller('ChatsCtrl', function($scope, $http, Chats) {
  //$scope.beers = {};
  console.log("asf");
  $http.get('http://beer.dev/api/v1/beer').then(function(e) {
    console.log(e);
    //$scope.beers = e.data;
    $scope.t_malt1_name = e.data[0].beer;
    $scope.brewer = e.data[0].t_malt1_brewer;
    $scope.image = e.data[0].t_malt1_img;
    $scope.beer = e.data[1].t_malt2_name;
    $scope.brewer = e.data[1].t_malt2_brewer;
    $scope.image = e.data[1].t_malt2_img;
    $scope.beer = e.data[2].t_malt3_name;
    $scope.brewer = e.data[2].t_malt3_brewer;
    $scope.image = e.data[2].t_malt3_img;
    $scope.beer = e.data[3].t_malt4_name;
    $scope.brewer = e.data[3].t_malt4_brewer;
    $scope.image = e.data[3].t_malt4_img;
  });

  $scope.beer = "abc";
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
