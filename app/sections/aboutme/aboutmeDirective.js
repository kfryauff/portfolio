(function () {

  var aboutmeDir = angular.module('aboutmeDirectives', []);

  aboutmeDir.directive('aboutme', function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/sections/aboutme/aboutmeView.html'
    };
  });

})();
