(function () {

  var projectsCtrl = angular.module('projects', []);

  projectsCtrl.controller('projectsCtrl', ['$scope', function ($scope) {
    var projCtrl = this;
    console.log($scope.projects);
    this.projects = $scope.projects;
  }]);

})();
