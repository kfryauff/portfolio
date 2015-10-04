(function() {

  var profileCtrl = angular.module('profileCtrl', []);

  profileCtrl.controller('profileController', ['$scope', function($scope) {

      $scope.message = 'Look at me go!';

  }]);

})();
