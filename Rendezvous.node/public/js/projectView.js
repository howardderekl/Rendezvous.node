// projectView.js
(function (angular) {

    var theModule = angular.module("projectView", []);
    
    var projectViewController = function ($scope, $window, $http) {
        
        var onProjectComplete = function (response) {
            $scope.project = response.data;
        };
        
        var onError = function (reason) {
            $scope.error = "Could not fetch the project.";
            console.log("Could not fetch the project. " + reason);
        };
        
        // Get the project name
        var urlParts = $window.location.pathname.split("/");
        var projectName = urlParts[urlParts.length - 1];
        
        $http.get("http://localhost:3000/api/projects/" + projectName)
            .then(onProjectComplete, onError);
                
    }

    theModule.controller("projectViewController", ["$scope", "$window", "$http", projectViewController]);

})(window.angular);