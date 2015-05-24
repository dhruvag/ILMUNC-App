// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('conference', ['ionic', 'ngCordova', 'starter.controllers', 'ionic.service.core', 'ionic.service.push'])

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // Your App ID
    app_id: 'bbb16289',
    // The public API key services will use for this app
    api_key: '0db913b237dcdae18095f22b4e628ab11ceb39e699b55994',
    // Your GCM sender ID/project number (Uncomment if supporting Android)
    gcm_id: '775496133916',
    dev_push: true
  });

}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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



.controller('confControl', function($scope,  $cordovaBarcodeScanner, $timeout, $cordovaContacts, $cordovaFileTransfer) {
  var NAME = "";
  var PHONE = "";
  var EMAIL = "";
  var COMMITTEE = "";
  var COUNTRY = "";
  var POLL = "";
  // $scope.identifyUser();
  // $scope.pushRegister();
  
  $scope.active = 'thursday';
  $scope.setActive = function(type) {
    $scope.active = type;
  };

  $scope.isActive = function(type) {
    return type === $scope.active;
  };

  $scope.thursday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'Conference Registration', description: "This is gonna be awesome", time: "12.00pm - 6.00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Hotel Check-in and Registration', description: "This is gonna be great", time: "2.00pm - 6.00pm", location: "Wynn Commons"  });
    $scope.tasks.push({ title: 'Pre-Conference Training and Workshops', description: "This is gonna be lovely", time: "4.00pmm - 5.30pm", location: "Houston Hall"  });
    $scope.tasks.push({ title: 'Opening Ceremonies', description: "This is gonna be fantastic", time: "7.00pm - 8.00pm", location: "Cohen Hall"  });
    $scope.tasks.push({ title: 'Committee Session I', description: "This is gonna be fantastic", time: "8.30pm - 11.30pm", location: "Cohen Hall"  });
    $scope.tasks.push({ title: 'Faculty Advisor Reception', description: "This is gonna be fantastic", time: "9.30pm - 10.30pm", location: "Cohen Hall"  });
  };

  $scope.friday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'Exploration of Delhi', description: "This is gonna be awesome", time: "9.00am - 2.00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'College Fair', description: "This is gonna be awesome", time: "12.00pm - 2.00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Committee Session II', description: "This is gonna be awesome", time: "2.00pm - 5.30pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Dinner Break', description: "This is gonna be awesome", time: "5.30pm - 7.00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Committee Session III', description: "This is gonna be awesome", time: "7.00pm - 10.00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Delegate Fest', description: "This is gonna be awesome", time: "11.00pm - 12.00am", location: "College Hall" });
  };

  $scope.saturday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'Committee Session III', description: "This is gonna be awesome", time: "9.30am - .00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Lunch Break', description: "This is gonna be awesome", time: "1.00pm - 2.30pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Committee Session V', description: "This is gonna be awesome", time: "2.30pm - 6.00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Dinner Break', description: "This is gonna be awesome", time: "6.00pm - 0.00pm", location: "College Hall" });
    $scope.tasks.push({ title: 'Delegate Dance', description: "This is gonna be awesome", time: "9.00pm - 12.00am", location: "College Hall" });
  };

  $scope.sunday = function() {
    $scope.tasks = [];
    $scope.tasks.push({ title: 'Committee Session VI', description: "This is gonna be awesome", time: "9.00am - 10.30am", location: "College Hall" });
    $scope.tasks.push({ title: 'Closing Ceremonies', description: "This is gonna be awesome", time: "12.00pm - 1.30pm", location: "College Hall" });
  };

  $scope.scanPoll = function() {
    $cordovaBarcodeScanner.scan().then(function(pollData) {
      POLL = pollData.text;
      if(POLL != "") {window.open(encodeURI(pollData.text), '_blank', 'location=yes', 'toolbar=yes');}
   }, function(error) {
    console.log("An error happened -> " + error);
  });
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
    {page: 'disec', name: 'Disarmament and International Security', comPic: 'img/disec.jpg', description: 'What the hell do we talk about here? What the hell do we talk about here', chair: 'Roy Lan', chairPic: '../img/roy.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall'},
    {page: 'specpol', name: 'Special Political and Decolonization Committee', comPic: 'img/specpol.jpg', chair: 'Kavya Bodapati', chairPic: '../img/kavya.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall', description: 'What the hell do we talk about here? What the hell do we talk about here'},
    {page: 'legal', name: 'Legal', comPic: 'img/legal.jpg', chair: 'Elise Pi', chairPic: '../img/elise.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall', description: 'What the hell do we talk about here? What the hell do we talk about here'}
    ]
  };

  $scope.groups[1] = {
    name: committees[1],
    items: [
    {page: 'unhrc', name: 'Historical UN Commission on Human Rights', comPic: 'img/unhrc.jpg', chair: 'Rahima Jamal', chairPic: '../img/rahima.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall', description: 'What the hell do we talk about here? What the hell do we talk about here',},
    {page: 'unodc', name: 'United Nations Office of Drug Control', comPic: 'img/unodc.jpg', chair: 'Ahmed Kamil', chairPic: '../img/ahmed.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall', description: 'What the hell do we talk about here? What the hell do we talk about here',}
    ]
  };

  $scope.groups[2] = {
    name: committees[2],
    items: [
    {page: 'constellis', name: 'Constellis & Syrian Government', comPic: 'img/constellis.jpg', chair: 'Alex Kaplan', chairPic: '../img/kent.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall', description: 'What the hell do we talk about here? What the hell do we talk about here',},
    {page: 'security', name: 'Security Council', comPic: 'img/security.jpg', chair: 'Dhrupad Bharadwaj', chairPic: '../img/dhrupad.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall', description: 'What the hell do we talk about here? What the hell do we talk about here',},
    {page: 'russia', name: 'Reconstructing Russia', comPic: 'img/russia.jpg', chair: 'Kent Hutchinson', chairPic: '../img/alex.jpg', email: 'roy.lan@upenn.edu', location: 'Cohen Hall', description: 'What the hell do we talk about here? What the hell do we talk about here',}
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
    { title: 'Conference Registration', description: "This is gonna be awesome", time: "12.00pm - 6.00pm", location: "College Hall" },
    { title: 'Hotel Check-in and Registration', description: "This is gonna be great", time: "2.00pm - 6.00pm", location: "Wynn Commons"  },
    { title: 'Pre-Conference Training and Workshops', description: "This is gonna be lovely", time: "4.00pmm - 5.30pm", location: "Houston Hall"  },
    { title: 'Opening Ceremonies', description: "This is gonna be fantastic", time: "7.00pm - 8.00pm", location: "Cohen Hall"  },
    { title: 'Committee Session I', description: "This is gonna be fantastic", time: "8.30pm - 11.30pm", location: "Cohen Hall"  },
    { title: 'Faculty Advisor Reception', description: "This is gonna be fantastic", time: "9.30pm - 10.30pm", location: "Cohen Hall"  }
  ];

  $scope.secs = [
  { name: 'Santosh Vallabhaneni', title: "Secretary-General", phone: 1234567890, email: "sec-gen@ilmunc-india.com", image: "img/sunny.jpg" },
  { name: 'Jyothi Vallurupalli', title: "Director-General", phone: 1234567890, email: "dir-gen@ilmunc-india.com", image: "img/jyothi.jpg" },
  { name: 'Ana Rancic', title: "Chief of Staff", phone: 1234567890, email: "staff@ilmunc-india.com", image: "img/ana.jpg" },
  { name: 'Elise Pi', title: "Chief of Operations", phone: 1234567890, email: "operations@ilmunc-india.com", image: "img/elise.jpg" },
  { name: 'Dhruv Agarwal', title: "Under Secretary-General Operations", phone: 1234567890, email: "usg-ops@ilmunc-india.com", image: "img/dhruv.jpg" },
  { name: 'Hannah White', title: "Under Secretary-General Administration", phone: 1234567890, email: "admin@ilmunc-india.com", image: "img/hannah.jpg" },
  ];

  $scope.peeps = [
  {name: 'Dhruv Agarwal', phone: 2679128714, email: 'usg-ops@ilmunc-india.com', country: 'Djibouti', committee: 'SPECPOL'},
  ];

})



