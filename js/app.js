angular.module('myTrip', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('mainPage', {
      url: '/mainPage',
      views: {
        'mainPage': {
          templateUrl: 'mainPage.html'
        }
      }
    })

    .state('maps', {
      url: '/maps',
      views: {
        'maps': {
          templateUrl: 'maps.html'
        }
      }
    })

    .state('setting', {
      url: '/setting',
      views: {
        'setting': {
          templateUrl: 'setting.html'
        }
      }
    })

  $urlRouterProvider.otherwise('/');
})

.controller('MyTripCtrl', function($scope, $ionicModal, $state, $ionicHistory) {
  // No need for testing data anymore
  $scope.tasks = [];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title,
      startDate: task.startDate,
      endDate: task.endDate,
      image: "travel.jpg"
    });
    $scope.taskModal.hide();
    task.title = "";
    task.startDate = "";
    task.endDate = "";
  }

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  }

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  }

  $scope.toMap = function() {
    console.log("In app.js toMap function");
    $state.go('map');
  }

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
});