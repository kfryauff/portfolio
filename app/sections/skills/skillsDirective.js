(function () {

  var skillsDir = angular.module('skillsDirectives', []);

  skillsDir.directive('skills', function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/sections/skills/skillsView.html'
    };
  });

})();
