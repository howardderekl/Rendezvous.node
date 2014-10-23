(function(angular) {

    var GalleryController = function ($scope, $window, rendezvousApi) {
        function genBrick() {
            var height = ~~(Math.random() * 500) + 100;
            var id = ~~(Math.random() * 10000);
            return {
                src: 'http://lorempixel.com/g/280/' + height + '/?' + id
            };
        };

        $scope.bricks = [
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick()
        ];

        $scope.add = function add() {
            $scope.bricks.push(genBrick());
        };

        $scope.remove = function remove() {
            $scope.bricks.splice(
                ~~(Math.random() * $scope.bricks.length),
                1
            )
        };

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
    };

    angular.module('rendezvousPortfolio').controller('GalleryController', ["$scope", "$window", "rendezvousApi", GalleryController]);

})(window.angular);