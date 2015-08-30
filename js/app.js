angular.module('myTrip', ['ionic'])


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
    $state.go('map');
  }

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
});

var demo = angular.module('demo', ['ng-mfb']);

  demo.controller('myCtrl', Ctrl);

  function Ctrl(defaultValues, $window){
    var vm = this;

    vm.positions = defaultValues.positions;
    vm.effects = defaultValues.effects;
    vm.methods = defaultValues.methods;
    vm.actions = defaultValues.actions;

    vm.menuState = 'closed';
    vm.loc = loc;
    vm.setMainAction = setMainAction;
    vm.mainAction = mainAction;

    vm.chosen = {
      effect : 'zoomin',
      position : 'br',
      method : 'click',
      action : 'fire'
    };

    vm.buttons = [{
      label: 'View on Github',
      icon: 'ion-social-github',
      href: 'https://github.com/nobitagit/ng-material-floating-button/'
    },{
      label: 'Follow me on Github',
      icon: 'ion-social-octocat',
      href: 'https://github.com/nobitagit'
    },{
      label: 'Share on Twitter',
      icon: 'ion-social-twitter',
      href: 'http://twitter.com/share?text=Amazing material floating action button directive!&url=http://nobitagit.github.io/ng-material-floating-button/&hashtags=angular,material,design,button'
    }];

    function loc(href) {
      $window.location.href = href;
    }

    function mainAction() {
      //console.log('Firing Main Action!');
    }

    function setMainAction() {
      if(vm.chosen.action === 'fire') {
        vm.mainAction = mainAction;
      } else {
        vm.mainAction = null;
      }
    }
  }

  Ctrl.prototype.hovered = function() {
    // toggle something on hover.
  };

  Ctrl.prototype.toggle = function() {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
  };

  Ctrl.prototype.closeMenu = function() {
    this.menuState = 'closed';
  };

  Ctrl.$inject = ['defaultValues', '$window'];