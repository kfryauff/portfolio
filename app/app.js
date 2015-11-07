(function (){

  var app = angular.module('portfolio', [
    'ui.router',
    'duScroll',
    'profileCtrl',
    'navDirectives',
    'landingDirectives',
    'aboutmeDirectives',
    'projects',
    // 'projectsDirectives',
    // 'projectsController',
    'skillsDirectives',
    'resumeDirectives'
  ]);

  app.controller('mainCtrl', [ '$scope', function ($scope) {
    $scope.projects = [
      {
        id: 1,
        title: "Follow The Money",
        company: "Center for Spatial and Textual Analysis (CESTA)",
        location: "Stanford, CA",
        year: "2015",
        feature: true,
        skills: ["skill1", "skill2", "skill3"],
        description: "project_description yadda yadda description"
      },
      {
        id: 2,
        title: "Vectomega",
        company: "Walter Reed Army Institute of Research",
        location: "Bethesda, MD",
        feature: false,
        skills: ["skill1", "skill2", "skill3"],
        description: "project_description yadda yadda description"
      },
      {
        id: 3,
        title: "CommuniCare",
        feature: true,
        skills: ["skill1", "skill2", "skill3"],
        description: "project_description yadda yadda description"
      },
      {
        id: 4,
        title: "SUTalk",
        feature: false,
        skills: ["skill1", "skill2", "skill3"],
        description: "project_description yadda yadda description"
      },
      {
        id: 5,
        title: "Team Workout",
        feature: false,
        skills: ["skill1", "skill2", "skill3"],
        description: "project_description yadda yadda description"
      }
    ];
  }]);

  var project1 = {
    name: "project1",
    skills: ["skill1", "skill2", "skill3"],
    description: "project_description"
  };

})();
