var app = angular.module('App', ['ionic', 'ngCordovaBeacon'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller("ExampleController", function($scope, $rootScope, $ionicPlatform, $cordovaBeacon) {

    $scope.beacons = {};

    $ionicPlatform.ready(function() {

      $cordovaBeacon.requestWhenInUseAuthorization();

      $rootScope.on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
        var uniqueBeaconKey;
        for(var i = 0; i < pluginResult.beacons.length; i++) {
          uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
          $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
        }
        $scope.$apply();
      });

      $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "b9407f30-f5f8-466e-aff9-25556b57fe6d"));

    });
  });
