// projectView.js
(function (angular) {

    var theModule = angular.module("projectView", []);

    theModule.controller("projectViewController",
    ["$scope", "$window", "$http",
    function($scope) {
        // Get the project name
        var urlParts = $window.location.pathname.split("/");
        var baseUrl = "localhost:3000/api/projects/";
        var projectName = urlParts[urlParts.length - 1];

        var projectUrl = baseUrl + projectName;
        $http.get(projectUrl)
            .then(function (result) {
                // success
                $scope.project = result.data;
            }, function (err) {
                // error
                alert(err);
            });
    }]);

})(window.angular);