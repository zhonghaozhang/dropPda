cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
        "id": "cordova-plugin-qrscanner.QRScanner",
        "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "file": "plugins/cordova-plugin-qrscanner/src/browser/plugin.min.js",
        "id": "cordova-plugin-qrscanner.QRScannerProxy",
        "pluginId": "cordova-plugin-qrscanner",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-baidumaplocation/www/baidumap_location.js",
        "id": "cordova-plugin-baidumaplocation.baidumap_location",
        "pluginId": "cordova-plugin-baidumaplocation",
        "clobbers": [
            "cordova.plugins.baidumap_location",
            "plugin.baidumap_location",
            "baidumap_location"
        ]
    },
    {
        "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
        "id": "cordova-plugin-keyboard.keyboard",
        "pluginId": "cordova-plugin-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-qrscanner": "3.0.1",
    "cordova-plugin-baidumaplocation": "4.0.2",
    "cordova-plugin-keyboard": "1.2.0"
}
// BOTTOM OF METADATA
});