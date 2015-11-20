(function (){

  var app = angular.module('portfolio', [
    'ui.router',
    'ui.bootstrap',
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

  app.value('duScrollOffset', 120);

  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url:'/home',
          templateUrl: 'index.html',
          controller: 'mainCtrl'
        });

      $urlRouterProvider.otherwise('home');
    }
  ]);

  app.factory('projects', [function () {
    var obj = {
      projects: [
        {
          id: 1,
          title: "Follow The Money",
          company: "Center for Spatial and Textual Analysis (CESTA)",
          location: "Stanford, CA",
          year: 2015,
          feature: true,
          images: [
            "assets/images/Generic_Code.png"
          ],
          skills: ["UI/UX Design", "HTML5", "CSS3", "SASS", "Javasript", "d3.js", "d3-carto", "Adobe Photoshop", "Adobe Illustrator"],
          description: "<p>In-lieu programs compensate states and counties for lost tax revenue for activities on public lands. This project examines the history and geography of these programs in the Western U.S. Few Americans know about federal in-lieu programs that transfer revenues to states and counties based on activities on the public lands.</p>"
        },
        {
          id: 2,
          title: "WRBU/Vectomega Redesign",
          company: "Walter Reed Army Institute of Research",
          location: "Bethesda, MD",
          year: 2012,
          feature: true,
          images: [
            "assets/images/Generic_Code.png"
          ],
          skills: ["UI/UX Design", "HTML5", "PHP", "CSS3", "Javasript", "Adobe Photoshop", "Adobe Illustrator"],
          description: "<p></p>"
        },
        {
          id: 3,
          title: "CommuniCare",
          location: "Stanford, CA",
          year: 2015,
          feature: false,
          images: [
            "assets/images/Generic_Code.png"
          ],
          skills: ["UI/UX Design", "HTML5", "PHP", "CSS3", "Javasript", "Ruby on Rails", "Adobe Photoshop", "Adobe Illustrator", "Sketch"],
          description: "<p>This project was a senior human-computer interaction project for an upper level HCI course.</p>"
        },
        {
          id: 4,
          title: "SUTalk",
          feature: false,
          images: [
            "assets/images/Generic_Code.png"
          ],
          skills: ["skill1", "skill2", "skill3"],
          description: "project_description yadda yadda description"
        },
        {
          id: 5,
          title: "Team Workout",
          feature: false,
          images: [
            "assets/images/Generic_Code.png"
          ],
          skills: ["skill1", "skill2", "skill3"],
          description: "project_description yadda yadda description"
        }
      ],
      skills: [
        "UI/UX Design", "Adobe Photoshop", "Adobe Illustrator", "Sketch",
        "Ruby on Rails",
        "HTML5", "PHP", "CSS3", "SASS",
        "Javasript", "d3.js", "d3-carto",
        "Java", "C++", "C"
      ]
    };
    return obj;
  }]);


  app.controller('mainCtrl', [ '$scope', 'projects', function ($scope, projects) {
    $scope.skills =
    $scope.projects = projects.projects;
  }]);

})();
