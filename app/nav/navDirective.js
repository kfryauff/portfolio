(function () {

  var navDir = angular.module('navDirectives', []);

  navDir.directive('header', function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/nav/header.html'
    };
  });

  navDir.directive('footer', function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/nav/footer.html'
    };
  });

})();
