// portfolioView.js
(function (angular) {
    
    var theModule = angular.module("portfolioView", []);
    
    var portfolioViewController = function ($scope, $http) {
        
        var onPortfolioComplete = function (response) {
            $scope.projects = response.data;
        };
        
        var onError = function (reason) {
            $scope.error = "Could not fetch the projects.";
            console.log("Could not fetch the projects. " + reason);
        };
        
      $http.get("http://localhost:3000/api/projects")
            .then(onPortfolioComplete, onError);
                
    }
    
    theModule.controller("portfolioViewController", ["$scope", "$http", portfolioViewController]);

})(window.angular);