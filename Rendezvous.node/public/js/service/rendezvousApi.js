
(function(angular) {

    var rendezvousApi = function($http, $location){

        var baseUrl = $location.protocol() +  "://" + $location.host() + ":8080/api/";

        var getProjects = function(){
            return $http.get(baseUrl + "projects")
                .then(function(response) {
                   return response.data;
                });
        };

        var getProject = function(projectName){
            return $http.get(baseUrl + "projects/" + projectName)
                .then(function(response){
                    return response.data;
                });
        };

        var getServices = function() {
            return $http.get(baseUrl + "services")
                .then(function(response) {
                    return response.data;
                });
        };

        var getTeamMembers = function(){
            return $http.get(baseUrl + "team_members")
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getProjects : getProjects,
            getProject : getProject,
            getServices : getServices,
            getTeamMembers : getTeamMembers
        };
    };

    var theModule = angular.module("rendezvousPortfolio");
    theModule.factory("rendezvousApi", rendezvousApi);

})(window.angular);