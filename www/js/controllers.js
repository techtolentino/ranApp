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
      line:"Makersquare Hackathon app. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam perferendis fugiat expedita, molestias, quidem quo. Assumenda, nostrum, voluptatibus. Cumque fugit laboriosam laudantium dicta, ut, dignissimos iste veniam quis dolores explicabo."
    },
    {
      stack:"FOUNDATION 5 / RAILS / jQUERY"
    },
    {
      problem:"Lorem ipsum dolor sit amet, cio temporibus praesentium alias."
    },
    {
        image: "https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/freshfunction_tn.png"
    }
  ]
},
{
  title: "PASSBOOK",
  colorClass: "project-two",
  contents: [
    {
      line:"Bill tracking app. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quis ipsam architecto libero consequuntur perspiciatis ex enim ab odit illum mollitia, non voluptatum dolorem minus aperiam ducimus accusantium magnam deleniti."
    },
    {
      stack:"ANGULARJS x FIREBASE"
    },
    {
      problem:"Lorem ipsum dolor sit amet, cio temporibus praesentium alias."
    },
    {
      image: "https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/passbook_tn.png"
    }
  ]
},
  {
  title: "RAN DOCS",
  colorClass: "project-three",
  contents: [
    {
      line:"Code snippet library."
    },
    {
      stack:"HTML / CSS / jQUERY"
    },
    {
      problem:"Lorem ipsum dolor sit amet, cio temporibus praesentium alias."
    },
    {
      image: "https://raw.githubusercontent.com/techtolentino/ranApp/master/www/img/randocs_tn.png"
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