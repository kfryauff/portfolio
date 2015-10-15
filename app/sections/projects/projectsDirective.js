(function () {

  var projectsDir = angular.module('projects');

  projectsDir.directive('projects', [function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/sections/projects/projectsView.html'
    };
  }]);

})();
