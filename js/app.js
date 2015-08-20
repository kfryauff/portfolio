(function (){
  var app = angular.module('portfolio', []);

  app.controller('PortfolioController', function() {
    this.project = project1;
  });

  var project1 = {
    name: "project1",
    skills: ["skill1", "skill2", "skill3"],
    description: "project_description"
  }

})();
