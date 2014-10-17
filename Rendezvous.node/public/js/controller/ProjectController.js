// projectView.js
(function(angular) {

    var theModule = angular.module('rendezvousPortfolio');

    var ProjectController  = function ($scope, $window, rendezvousApi) {
        $scope.myInterval = 5000;

        var onProjectComplete = function(data) {
            $scope.project = data;
        };

        var onProjectError = function(reason) {
            $scope.error = reason;
            console.log("Could not get the project information. " + reason);
        };

        // Get the project name
        var urlParts = $window.location.pathname.split("/");
        var projectName = urlParts[urlParts.length - 1];

        rendezvousApi.getProject(projectName)
            .then(onProjectComplete, onProjectError);
    }

    theModule.controller('ProjectController', ["$scope", "$window", "rendezvousApi", ProjectController]);

})(window.angular);


