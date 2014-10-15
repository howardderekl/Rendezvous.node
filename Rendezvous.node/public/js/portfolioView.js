// portfolioView.js
(function (angular) {
    
    var theModule = angular.module("portfolioView", []);
    
    var portfolioViewController = function ($scope, $http, $location) {
        
        var onPortfolioComplete = function (response) {
            $scope.projects = response.data;
        };
        
        var onError = function (reason) {
            $scope.error = "Could not find any projects.";
            console.log("Could not find any projects. " + reason);
        };
        var baseUrl = $location.protocol() +  "://" + $location.host() + ":3000/api/projects";
      $http.get(baseUrl)
            .then(onPortfolioComplete, onError);
                
    }
    
    theModule.controller("portfolioViewController", ["$scope", "$http", "$location", portfolioViewController]);

})(window.angular);