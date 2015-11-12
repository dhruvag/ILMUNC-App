// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('conference', ['ionic','ionic.service.core', 'ngCordova', 'starter.controllers',  'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    Ionic.io();

    var user = Ionic.User.current();

    if (!user.id) {
      user.id = Ionic.User.anonymousId();

            // save our newly created user
            user.save();
          }

          var push = new Ionic.Push({
            "debug": false
          });

          push.register(function (token) {
            console.log("Got Token:", token.token);

            // now we have token, so add it to user
            push.addTokenToUser(user);

            // don't forget to save user to Ionic Platform with our new token
            user.save();
          });

        // set this user as current, so we can acess him later
        Ionic.User.current(user);

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    window.open = cordova.InAppBrowser.open;
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent': {
        templateUrl: "templates/schedule.html"
      }
    }
  })

  .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html"
      }
    }
  })

  .state('app.procedure', {
    url: "/procedure",
    views: {
      'menuContent': {
        templateUrl: "templates/procedure.html"
      }
    }
  })

  .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "templates/contact.html"
      }
    }
  })

  .state('app.sponsors', {
    url: "/sponsors",
    views: {
      'menuContent': {
        templateUrl: "templates/sponsors.html",
      }
    }
  })

  .state('app.connect', {
    url: "/connect",
    views: {
      'menuContent': {
        templateUrl: "templates/connect.html",
      }
    }
  })

  .state('app.meet', {
    url: "/meet",
    views: {
      'menuContent': {
        templateUrl: "templates/meet.html",
      }
    }
  })

  .state('app.polling', {
    url: "/polling",
    views: {
      'menuContent': {
        templateUrl: "templates/polling.html",
      }
    }
  })

  .state('app.feedback', {
    url: "/feedback",
    views: {
      'menuContent': {
        templateUrl: "templates/feedback.html",
      }
    }
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
      }
    }
  })

  .state('app.disec', {
    url: "/disec",
    views: {
      'menuContent': {
        templateUrl: "templates/disec.html",
      }
    }
  })

  .state('app.specpol', {
    url: "/specpol",
    views: {
      'menuContent': {
        templateUrl: "templates/specpol.html",
      }
    }
  })

  .state('app.legal', {
    url: "/legal",
    views: {
      'menuContent': {
        templateUrl: "templates/legal.html",
      }
    }
  })

  .state('app.unhrc', {
    url: "/unhrc",
    views: {
      'menuContent': {
        templateUrl: "templates/unhrc.html",
      }
    }
  })

  .state('app.unodc', {
    url: "/unodc",
    views: {
      'menuContent': {
        templateUrl: "templates/unodc.html",
      }
    }
  })

  .state('app.constellis', {
    url: "/constellis",
    views: {
      'menuContent': {
        templateUrl: "templates/constellis.html",
      }
    }
  })

  .state('app.security', {
    url: "/security",
    views: {
      'menuContent': {
        templateUrl: "templates/security.html",
      }
    }
  })

  .state('app.russia', {
    url: "/russia",
    views: {
      'menuContent': {
        templateUrl: "templates/russia.html",
      }
    }
  })

  .state('app.sessions', {
    url: "/sessions",
    views: {
      'menuContent': {
        templateUrl: "templates/sessions.html",
        controller: 'SessionsCtrl'
      }
    }
  })

  .state('app.session', {
    url: "/sessions/:sessionId",
    views: {
      'menuContent': {
        templateUrl: "templates/session.html",
        controller: 'SessionCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})



.controller('confControl', function($scope, $cordovaBarcodeScanner, $location, $timeout, $cordovaContacts, $cordovaFileTransfer) {

  var NAME = "";
  var PHONE = "";
  var EMAIL = "";
  var COMMITTEE = "";
  var COUNTRY = "";
  var POLL = "";
  
  $scope.active = 'thursday';
  $scope.setActive = function(type) {
    $scope.active = type;
  };

  $scope.isActive = function(type) {
    return type === $scope.active;
  };

  $scope.thursday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'On Site Registration', description: "This is gonna be awesome", time: "9.30am - 12.00pm", location: "College Hall"});
    $scope.tasks.push({ title: 'University Panel', description: "This is gonna be great", time: "12.00pm - 1.00pm", location: "Wynn Commons"});
    $scope.tasks.push({ title: 'Lunch', description: "This is gonna be lovely", time: "1.00pm - 2.00pm", location: "Houston Hall"});
    $scope.tasks.push({ title: 'Opening Ceremony', description: "This is gonna be fantastic", time: "3.00pm - 4.00pm", location: "Cohen Hall"});
    $scope.tasks.push({ title: 'Opening Ceremony', description: "This is gonna be fantastic", time: "4.00pm - 4.30pm", location: "Cohen Hall"});
    $scope.tasks.push({ title: 'Tea Break', description: "This is gonna be fantastic", time: "4.30pm - 5.00pm", location: "Cohen Hall"});
    $scope.tasks.push({ title: 'Committee Session I', description: "This is gonna be fantastic", time: "5.00pm - 7.30pm", location: "Cohen Hall"});
    $scope.tasks.push({ title: 'Dinner', description: "This is gonna be fantastic", time: "8.00pm - 9.00pm", location: "Cohen Hall"});
    $scope.tasks.push({ title: 'Socials', description: "This is gonna be fantastic", time: "9.00pm - 11.00pm", location: "Cohen Hall"});

  };

  $scope.friday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'Breakfast (Round Table with Caroline)', description: "This is gonna be awesome", time: "8.00am - 9.00am", location: "College Hall"});
    $scope.tasks.push({ title: 'Speaker Session', description: "This is gonna be awesome", time: "9.00am - 9.30am", location: "College Hall"});
    $scope.tasks.push({ title: 'Committee Session II', description: "This is gonna be awesome", time: "9.30am - 11.00am", location: "College Hall"});
    $scope.tasks.push({ title: 'Tea Break', description: "This is gonna be awesome", time: "11.00am - 11.30am", location: "College Hall"});
    $scope.tasks.push({ title: 'Committee Session III', description: "This is gonna be awesome", time: "11.30pm - 1.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Lunch', description: "This is gonna be awesome", time: "1.30pm - 2.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Committee Session IV', description: "This is gonna be awesome", time: "2.30pm - 4.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Tea Break', description: "This is gonna be awesome", time: "4.30pm - 5.00pm", loction: "College Hall"});
    $scope.tasks.push({ title: 'Career Workshop with Caroline Linger', description: "This is gonna be awesome", time: "5.00pm - 6.00pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Speaker Session', description: "This is gonna be awesome", time: "6.00pm - 7.00pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Dinner', description: "This is gonna be awesome", time: "7.30pm - 8.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Socials', description: "This is gonna be awesome", time: "8.30pm - 10.30pm", location: "College Hall"});
  };

  $scope.saturday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'Breakfast (Round Table with Caroline)', description: "This is gonna be awesome", time: "8.00am - 9.00am", location: "College Hall"});
    $scope.tasks.push({ title: 'Committee Session V', description: "This is gonna be awesome", time: "9.00am - 11.00am", location: "College Hall"});
    $scope.tasks.push({ title: 'Tea Break', description: "This is gonna be awesome", time: "11.00am - 11.30am", location: "College Hall"});
    $scope.tasks.push({ title: 'Committee Session VI', description: "This is gonna be awesome", time: "11.30pm - 1.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Lunch', description: "This is gonna be awesome", time: "1.30pm - 2.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'College Fair', description: "This is gonna be awesome", time: "2.30pm - 3.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Committee Session VII', description: "This is gonna be awesome", time: "3.30pm - 5.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Tea Break', description: "This is gonna be awesome", time: "5.30pm - 6.00pm", loction: "College Hall"});
    $scope.tasks.push({ title: 'Speaker Session', description: "This is gonna be awesome", time: "6.00pm - 7.00pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Dinner', description: "This is gonna be awesome", time: "7.30pm - 8.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Socials', description: "This is gonna be awesome", time: "8.30pm - 11.00pm", location: "College Hall"});
  };

  $scope.sunday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'Breakfast (Round Table with Caroline)', description: "This is gonna be awesome", time: "8.00am - 9.00am", location: "College Hall"});
    $scope.tasks.push({ title: 'Committee Session 8', description: "This is gonna be awesome", time: "9.00pm - 11.00am", location: "College Hall"});
    $scope.tasks.push({ title: 'Tea Break', description: "This is gonna be awesome", time: "11.00am - 12.00pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Closing Ceremony', description: "This is gonna be awesome", time: "12.00pm - 1.30pm", location: "College Hall"});
    $scope.tasks.push({ title: 'Lunch', description: "This is gonna be awesome", time: "1.30pm - 2.30pm", location: "College Hall"});
  };

  $scope.scanPoll = function() {
    $cordovaBarcodeScanner.scan().then(function(pollData) {
      POLL = pollData.text;
      if(POLL != "") {window.open(encodeURI(pollData.text), '_blank', 'location=yes', 'toolbar=yes');}
    }, function(error) {
      console.log("An error happened -> " + error);
    });
  };

  $scope.go = function ( path ) {
    $location.path(path);
  };

  $scope.doRefresh = function() {
    console.log('Refreshing!');
    $timeout(function() {
      //simulate async response
      $scope.peeps.push({name: NAME, phone: PHONE, email: EMAIL, country: COUNTRY, committee: COMMITTEE});
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);

  };

  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
     //Santosh Vallabhaneni~1234567890~sec-gen@ilmunc-india.com~Reconstructing Russia~United States of America
     var split = imageData.text.split('~');
     NAME = split[0];
     PHONE = parseInt(split[1]);
     EMAIL = split[2];
     COMMITTEE = split[3];
     COUNTRY = split[4];
     if (NAME == "") {alert('Didn\'t quite get that! Please try again');}
     if (NAME != "") {$scope.doRefresh();}
   }, function(error) {
    console.log("An error happened -> " + error);
  });
  };
//, "phoneNumbers": [PHONE], "emails": [EMAIL]
$scope.createContact = function() {
  $cordovaContacts.save({"displayName": NAME, "phoneNumbers": [{"value": PHONE,"type": "mobile"}], "emails": [{"value": EMAIL, "type": "work"}]}).then(function(result) {
    alert('Contact has been added to you address book!');
  }, function(error) {
    console.log(error);
  });
};

NAME = "";
PHONE = "";
EMAIL = "";
COMMITTEE = "";
COUNTRY = "";

$scope.groups = [];
var committees = ['General Assembly', 'Specialized Committees', 'Crisis Committees']
$scope.groups[0] = {
  name: committees[0],
  items: [
  {page: 'disec', name: 'Disarmament and International Security', description: "Topic A: Fourth Generation Warfare in the Middle East and Topic B: Emerging Technologies\' Impact on Arms Trade", chair: 'Roy Lan', chairPic: 'img/roy.jpg', email: 'disec@ilmunc-india.com', location: 'Cohen Hall', bg: 'http://ilmunc-india.com/assets/bg/disec.pdf', dbg: 'http://disec.ilmunc-india.com'},
  {page: 'specpol', name: 'Special Political and Decolonization Committee', chair: 'Kavya Bodapati', chairPic: 'img/kavya.jpg', email: 'specpol@ilmunc-india.com', location: 'Cohen Hall', description: 'Topic A: Territorial Integrity of the Former Soviet Republics and Topic B: Maritime Dispute',  bg: 'http://ilmunc-india.com/assets/bg/specpol.pdf', dbg: 'http://specpol.ilmunc-india.com'},
  {page: 'legal', name: 'Legal', chair: 'Elise Pi', chairPic: 'img/elise.jpg', email: 'legal@ilmunc-india.com', location: 'Cohen Hall', description: 'Topic A: Diplomatic and Consular Mission Security and Topic B: War Ethics of Drones', bg: 'http://ilmunc-india.com/assets/bg/legal.pdf', dbg: 'http://legal.ilmunc-india.com'}
  ]
};

$scope.groups[1] = {
  name: committees[1],
  items: [
  {page: 'unhrc', name: 'Historical UN Commission on Human Rights', chair: 'Madeline Su', chairPic: 'img/madeline.jpg', email: 'unhrc@ilmunc-india.com', location: 'Cohen Hall', description: 'Topic A: Caravan of Death (Pinochet’s Chile) and Topic B: Khmer Rouge', bg: 'http://ilmunc-india.com/assets/bg/unodc.pdf', dbg: 'http://unodc.ilmunc-india.com'},
  {page: 'unodc', name: 'United Nations Office of Drug Control', chair: 'Ahmed Kamil', chairPic: 'img/ahmed.jpg', email: 'unodc@ilmunc-india.com', location: 'Cohen Hall', description: 'Topic A: Drug Cartels and Topic B: Police Response to Violence', bg: 'http://ilmunc-india.com/assets/bg/UNHRC.pdf', dbg: 'http://unhrc.ilmunc-india.com'}
  ]
};

$scope.groups[2] = {
  name: committees[2],
  items: [
  {page: 'constellis', name: 'Constellis & Syrian Government', chair: 'Kent Hutchinson', chairPic: 'img/kent.jpg', email: 'constellis@ilmunc-india.com', location: 'Cohen Hall', description: 'Crisis Committee. Information released within committee.', bg: 'http://ilmunc-india.com/assets/bg/constellis.pdf', dbg: 'http://constellis.ilmunc-india.com'},
  {page: 'security', name: 'Security Council', chair: 'Dhrupad Bharadwaj', chairPic: 'img/dhrupad.jpg', email: 'unsc@ilmunc-india.com', location: 'Cohen Hall', description: 'Topic A: Limiting Military Intervention in sensitive Geo-Political Countries and Topic B: Reforms of the United Nations Security Council', bg: 'http://ilmunc-india.com/assets/bg/security.pdf', dbg: 'http://securitycouncil.ilmunc-india.com'},
  {page: 'russia', name: 'Reconstructing Russia', chair: 'Janice Chung', chairPic: 'img/janice.jpg', email: 'reconrussia@ilmunc-india.com', location: 'Cohen Hall', description: 'Crisis Committee. Information released within committee.', bg: 'http://ilmunc-india.com/assets/bg/russia.pdf', dbg: 'http://russia.ilmunc-india.com'}
  ]
}; 

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
   $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  $scope.tasks = [
  { title: 'Conference Registration', description: "This is gonna be awesome", time: "12.00pm - 6.00pm", location: "College Hall", color: "#739536" },
  { title: 'Hotel Check-in and Registration', description: "This is gonna be great", time: "2.00pm - 6.00pm", location: "Wynn Commons"},
  { title: 'Pre-Conference Training and Workshops', description: "This is gonna be lovely", time: "4.00pmm - 5.30pm", location: "Houston Hall"},
  { title: 'Opening Ceremonies', description: "This is gonna be fantastic", time: "7.00pm - 8.00pm", location: "Cohen Hall"},
  { title: 'Committee Session I', description: "This is gonna be fantastic", time: "8.30pm - 11.30pm", location: "Cohen Hall"},
  { title: 'Faculty Advisor Reception', description: "This is gonna be fantastic", time: "9.30pm - 10.30pm", location: "Cohen Hall"}
  ];

  $scope.secs = [
  { name: 'Santosh Vallabhaneni', title: "Secretary-General", phone: 1234567890, email: "sec-gen@ilmunc-india.com", image: "img/sunny.jpg" },
  { name: 'Jyothi Vallurupalli', title: "Director-General", phone: 1234567890, email: "dir-gen@ilmunc-india.com", image: "img/jyothi.jpg" },
  { name: 'Ana Rancic', title: "Chief of Staff", phone: 1234567890, email: "staff@ilmunc-india.com", image: "img/ana.jpg" },
  { name: 'Elise Pi', title: "Chief of Operations", phone: 1234567890, email: "operations@ilmunc-india.com", image: "img/elise2.jpg" },
  { name: 'Dhruv Agarwal', title: "Under Secretary-General Operations", phone: 1234567890, email: "usg-ops@ilmunc-india.com", image: "img/dhruv.jpg" },
  { name: 'Hannah White', title: "Under Secretary-General Administration", phone: 1234567890, email: "admin@ilmunc-india.com", image: "img/hannah.jpg" },
  ];

  // $scope.peeps = [
  // {name: 'Dhruv Agarwal', phone: 2679128714, email: 'usg-ops@ilmunc-india.com', country: 'Djibouti', committee: 'SPECPOL'},
  // ];

})



