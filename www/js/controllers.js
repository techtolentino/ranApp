angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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

// Accordion Controller

.controller('ProjectsCtrl', function($scope) {
$scope.groups = [{
  title: "FRESH FUNCTION",
  colorClass: "project-one",
  line:"For those that know me, they know that I come from a purely hip-hop background with zero experience in code. In my early days at Makersquare, I continuously searched for ways to combine the two worlds. This hackathon project, Fresh Function, was my first lone attempt at creating a web app. Here, the user can select various elements in the drop-down options then press the 'Create That' button to create their very own dev-swag. The results were pretty fresh!",
  stack:"RAILS / jQUERY / FOUNDATION 5",
  image: "https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/freshfunction_tn.png",
  sketch:"https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/freshfunction_sketch.jpg"
},
{
  title: "PASSBOOK",
  colorClass: "project-two",
  line:"The Passbook App is one of my more recent projects and is still being worked on. This app would allow a user to keep track of which bills are approaching their due date using the search or sort functionalities. In addition, the user will be able to track which bills have been paid for during the current month.",
  stack:"ANGULARJS x FIREBASE",
  image: "https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/passbook_tn.png",
  sketch:"https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/passbook_sketch.jpg"
},
  {
  title: "RAN DOCS",
  colorClass: "project-three",
  line:"Code snippet library.",
  stack:"HTML / CSS / jQUERY",
  image: "https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/randocs_tn.png",
  sketch:"https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/randocs_sketch.jpg"
}
];
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
  
});