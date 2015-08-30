angular.module('myTrip', ['ionic','ng-mfb'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('mainPage', {
      url: '/mainPage',
      views: {
        'mainPage': {
          templateUrl: 'index.html'
        }
      }
    })
    .state('settings', {
      url: '/settings',
      views: {
        'settings': {
          templateUrl: 'settings.html'
        }
      }
    })
    .state('map', {
      url: '/map',
      views: {
        'map': {
          templateUrl: 'map.html'
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
      image: "travel.jpg",
      comment: task.comment
    });
    $scope.taskModal.hide();
    task.title = "";
    task.startDate = "";
    task.endDate = "";
    task.comment = "";
  }

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  }

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  }

  $scope.buttons = [{
    label: 'a link text',
    icon: 'ion-paper-airplane'
  },{
    label: 'another link',
    icon: 'ion-plus'
  },{
    label: 'a third link',
    icon: 'ion-paperclip'
  }];
});
