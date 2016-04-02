// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    console.log("Device Ready")
    var push = PushNotification.init({
      "android": {
        "senderID": "528627857562",
        "icon": 'iconName',  // Small icon file name without extension
        "iconColor": '#248BD0'
      },
      "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

    push.on('registration', function(data) {
    console.log(data.registrationId);
    $("#gcm_id").html(data.registrationId);
    });

    push.on('notification', function(data) {
    console.log(data.message);
    alert(data.title+" Message: " +data.message);
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
    });

    push.on('error', function(e) {
    console.log(e.message);
    });
  });
})
