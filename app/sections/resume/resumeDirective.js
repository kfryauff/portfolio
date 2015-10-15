(function () {

  var resumeDir = angular.module('resumeDirectives', []);

  resumeDir.directive('resume', function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/sections/resume/resumeView.html'
    };
  });

})();
