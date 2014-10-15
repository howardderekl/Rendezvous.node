// projectView.js
(function(angular) {

    var theModule = angular.module('projectView', ['ui.bootstrap', 'ngTouch']);

    var projectViewController  = function ($scope, $window, $http) {
        var baseUrl = "http://localhost:3000/api/projects/";
        $scope.myInterval = 5000;

        var onProjectComplete = function(response) {
            $scope.project = response.data;
        };

        var onProjectError = function(reason) {
            $scope.error = reason;
            console.log("Could not get the project information. " + reason);
        };

        // Get the project name
        var urlParts = $window.location.pathname.split("/");
        var projectName = urlParts[urlParts.length - 1];

        $http.get(baseUrl + projectName)
            .then(onProjectComplete, onProjectError);
    }

    theModule.controller('projectViewController', ["$scope", "$window", "$http", projectViewController]);

})(window.angular);


