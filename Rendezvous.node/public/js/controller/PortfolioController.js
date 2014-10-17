// portfolioView.js
(function (angular) {
    
    var theModule = angular.module("rendezvousPortfolio");
    
    var PortfolioController = function ($scope, rendezvousApi) {
        
        var onPortfolioComplete = function (data) {
            $scope.projects = data;
        };
        
        var onError = function (reason) {
            $scope.error = "Could not find any projects.";
            console.log("Could not find any projects. " + reason);
        };

      rendezvousApi.getProjects().then(onPortfolioComplete, onError);
                
    }
    
    theModule.controller("PortfolioController", ["$scope", "rendezvousApi", PortfolioController]);

})(window.angular);