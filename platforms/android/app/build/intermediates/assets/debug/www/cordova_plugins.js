cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-mauron85-background-geolocation.backgroundGeolocation",
    "file": "plugins/cordova-plugin-mauron85-background-geolocation/www/backgroundGeolocation.js",
    "pluginId": "cordova-plugin-mauron85-background-geolocation",
    "clobbers": [
      "backgroundGeolocation"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "com.unarin.cordova.beacon.underscorejs",
    "file": "plugins/com.unarin.cordova.beacon/www/lib/underscore-min-1.6.js",
    "pluginId": "com.unarin.cordova.beacon",
    "runs": true
  },
  {
    "id": "com.unarin.cordova.beacon.Q",
    "file": "plugins/com.unarin.cordova.beacon/www/lib/q.min.js",
    "pluginId": "com.unarin.cordova.beacon",
    "runs": true
  },
  {
    "id": "com.unarin.cordova.beacon.LocationManager",
    "file": "plugins/com.unarin.cordova.beacon/www/LocationManager.js",
    "pluginId": "com.unarin.cordova.beacon",
    "merges": [
      "cordova.plugins"
    ]
  },
  {
    "id": "com.unarin.cordova.beacon.Delegate",
    "file": "plugins/com.unarin.cordova.beacon/www/Delegate.js",
    "pluginId": "com.unarin.cordova.beacon",
    "runs": true
  },
  {
    "id": "com.unarin.cordova.beacon.Region",
    "file": "plugins/com.unarin.cordova.beacon/www/model/Region.js",
    "pluginId": "com.unarin.cordova.beacon",
    "runs": true
  },
  {
    "id": "com.unarin.cordova.beacon.Regions",
    "file": "plugins/com.unarin.cordova.beacon/www/Regions.js",
    "pluginId": "com.unarin.cordova.beacon",
    "runs": true
  },
  {
    "id": "com.unarin.cordova.beacon.CircularRegion",
    "file": "plugins/com.unarin.cordova.beacon/www/model/CircularRegion.js",
    "pluginId": "com.unarin.cordova.beacon",
    "runs": true
  },
  {
    "id": "com.unarin.cordova.beacon.BeaconRegion",
    "file": "plugins/com.unarin.cordova.beacon/www/model/BeaconRegion.js",
    "pluginId": "com.unarin.cordova.beacon",
    "runs": true
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Core",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Util",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-tts.tts",
    "file": "plugins/cordova-plugin-tts/www/tts.js",
    "pluginId": "cordova-plugin-tts",
    "clobbers": [
      "TTS"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.1.19",
  "cordova-plugin-mauron85-background-geolocation": "2.3.5",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3",
  "onesignal-cordova-plugin": "2.4.1",
  "phonegap-plugin-barcodescanner": "8.0.0",
  "com.unarin.cordova.beacon": "3.7.0",
  "cordova-plugin-badge": "0.8.7",
  "cordova-plugin-local-notification": "0.9.0-beta.2",
  "cordova-plugin-tts": "0.2.3"
};
// BOTTOM OF METADATA
});