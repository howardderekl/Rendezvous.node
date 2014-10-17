// ServiceController.js
(function(angular){

    var theModule = angular.module("rendezvousPortfolio");

    var ServiceController = function($scope, rendezvousApi){

        var onServiceComplete = function(data){
            $scope.services = data;
        };

        var onError = function(reason){
            $scope.error = "Could not find any services.";
            console.log("Could not find any services. " + reason);
        };

        rendezvousApi.getServices().then(onServiceComplete, onError);
    };

    theModule.controller("ServiceController", ["$scope", "rendezvousApi", ServiceController]);

})(window.angular);