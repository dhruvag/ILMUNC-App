// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('conference', ['ionic', 'ngCordova', 'starter.controllers'])

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
  $urlRouterProvider.otherwise('/app/schedule');
})

.controller('confControl', function($scope,  $cordovaBarcodeScanner, $timeout, $cordovaFileTransfer) {
    $scope.active = 'thursday';
    $scope.setActive = function(type) {
        $scope.active = type;
    };

    $scope.isActive = function(type) {
        return type === $scope.active;
    };

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };

     $scope.groups = [];
     var committees = ['General Assembly', 'Specialized Committees', 'Crisis Committees']
    $scope.groups[0] = {
      name: committees[0],
      items: []
    };
      $scope.groups[0].items.push('DISEC');
      $scope.groups[0].items.push('SPECPOL');
      $scope.groups[0].items.push('Legal');
       
    $scope.groups[1] = {
      name: committees[1],
      items: []
    };
      $scope.groups[1].items.push('Historical UNHRC');
      $scope.groups[1].items.push('UNODC');
       
    $scope.groups[2] = {
      name: committees[2],
      items: []
    };
      $scope.groups[2].items.push('Constellis & Syrian Government');
      $scope.groups[2].items.push('Security Council');
      $scope.groups[2].items.push('Reconstructing Russia');
  
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
    { title: 'New Delhi Tours', description: "This is gonna be awesome", time: "9.30am - 10.30am", location: "College Hall" },
    { title: 'Committee Session I', description: "This is gonna be great", time: "10.30am - 11.30am", location: "Wynn Commons"  },
    { title: 'Lunch Break', description: "This is gonna be lovely", time: "11.30am - 12.30pm", location: "Houston Hall"  },
    { title: 'Delegate Fest', description: "This is gonna be fantastic", time: "12.30pm - 1.00pm", location: "Cohen Hall"  }
  ];

  $scope.secs = [
    { name: 'Santosh Vallabhaneni', title: "Secretary-General", phone: 1234567890, email: "sec-gen@ilmunc-india.com", image: "img/sunny.jpg" },
    { name: 'Jyothi Vallurupalli', title: "Director-General", phone: 1234567890, email: "dir-gen@ilmunc-india.com", image: "img/jyothi.jpg" },
    { name: 'Ana Rancic', title: "Chief of Staff", phone: 1234567890, email: "staff@ilmunc-india.com", image: "img/ana.jpg" },
    { name: 'Elise Pi', title: "Chief of Operations", phone: 1234567890, email: "operations@ilmunc-india.com", image: "img/elise.jpg" },
    { name: 'Dhruv Agarwal', title: "Under Secretary-General Operations", phone: 1234567890, email: "usg-ops@ilmunc-india.com", image: "img/dhruv.jpg" },
    { name: 'Hannah White', title: "Under Secretary-General Administration", phone: 1234567890, email: "admin@ilmunc-india.com", image: "img/hannah.jpg" },
  ];

});


