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
  contents: [
    {
      line:"Lorem ipsum dolor sit amet, cunt numquam voluptatem. Commodi."
    },
    {
      problem:"Lorem ipsum dolor sit amet, cio temporibus praesentium alias."
    },
    {
      image:"http://placehold.it/200x200"
    }
  ]
},
{
  title: "PASSBOOK",
  colorClass: "project-two",
  contents: [
    {
      line:"Lorem ipsum dolor sit amet, nm enim iste, accusamus voluptas."
    },
    {
      problem:"Lorem ipsum dolor sit amet, cio temporibus praesentium alias."
    },
    {
      image:"http://placehold.it/200x200"
    }
  ]
},
  {
  title: "RAN DOCS",
  colorClass: "project-three",
  contents: [
    {
      line:"Lorem ipsum dolor sit amet, patum at quidem repellendus amet."
    },
    {
      problem:"Lorem ipsum dolor sit amet, cio temporibus praesentium alias."
    },
    {
      image:"http://placehold.it/200x200"
    }
  ]
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