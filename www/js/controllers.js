angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

$scope.theme = 'ionic-sidemenu-dark';
  $scope.tree =
    [{
      id: 1,
      level: 0,
      name: 'Maps',
      icon: "ion-map",
      items: [{
        id: 10,
        level: 1,
        name: 'Marker',
        icon: "ion-ios-location",
        items: [{
          id: 100,
          name: 'Images',
          level: 2,
          icon: "ion-image",
          state: 'app.search',
          items: null
        }, {
          id: 101,
          level: 2,
          name: 'User',
          icon: "ion-person",
          state: 'app.browse',
          items: null
        }]
      }]
    }, {
      id: 2,
      name: "News",
      icon: "ion-card",
      level: 0,
      items : [
          {
            id: 20,
            level: 1,
            name: 'Article',
            icon: "ion-ios-location",
            state: 'app.playlists'
          },
          {
            id: 21,
            level: 1,
            name: 'News',
            icon: "ion-ios-location",
            state: 'app.browse'
          },
        ]
    }];

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

;