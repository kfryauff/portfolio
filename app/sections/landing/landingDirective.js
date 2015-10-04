(function () {

  var landingDir = angular.module('landingDirectives', []);

  landingDir.directive('landing', function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/sections/landing/landingView.html'
    };
  });

})();
