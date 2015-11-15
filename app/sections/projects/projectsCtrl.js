(function () {

  var projects = angular.module('projects', []);

  projects.controller('projectsCtrl', ['$scope', 'projects', function ($scope, projects) {
    console.log(projects);
    var projCtrl = this;
    console.log($scope.projects);
    this.projects = $scope.projects;
  }]);

  projects.controller('projectsPag', function ($scope, $log) {

  $scope.maxSize = 10;
  $scope.bigTotalItems = 10;
  $scope.bigCurrentPage = 1;
  // $scope.valueArray = {
  //    name: hello,
  //    name: hello
  //   };
  $scope.vaLength = $scope.valueArray.length;
});

})();
