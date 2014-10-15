// portfolioView.js
(function (angular) {
    
    var theModule = angular.module("portfolioView", []);
    
    var portfolioViewController = function ($scope, $http) {
        
        var onPortfolioComplete = function (response) {
            $scope.projects = response.data;
        };
        
        var onError = function (reason) {
            $scope.error = "Could not find any projects.";
            console.log("Could not find any projects. " + reason);
        };
        
      $http.get("http://localhost:3000/api/projects")
            .then(onPortfolioComplete, onError);
                
    }
    
    theModule.controller("portfolioViewController", ["$scope", "$http", portfolioViewController]);

})(window.angular);