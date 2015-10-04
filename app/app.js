(function (){

  var app = angular.module('portfolio', [
    'ngRoute',
    'profileCtrl',
    'navDirectives',
    'landingDirectives'
  ]);

  var project1 = {
    name: "project1",
    skills: ["skill1", "skill2", "skill3"],
    description: "project_description"
  };

})();
