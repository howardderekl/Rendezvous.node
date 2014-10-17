// TeamMemberController.js
(function(angular){

    var theModule = angular.module("rendezvousPortfolio");

    var TeamMemberController = function($scope, rendezvousApi){

        var onServiceComplete = function(data){
            $scope.teamMembers = data;
        };

        var onError = function(reason){
            $scope.error = "Could not find any team members.";
            console.log("Could not find any team members. " + reason);
        };

        rendezvousApi.getTeamMembers().then(onServiceComplete, onError);
    };

    theModule.controller("TeamMemberController", ["$scope", "rendezvousApi", TeamMemberController]);

})(window.angular);