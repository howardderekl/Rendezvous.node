// projectView.js
(function (angular) {

    var theModule = angular.module("projectView", []);

    theModule.controller("projectViewController",
    ["$scope", "$window", "$http",
    function($scope, $window, $http) {
        // Get the project name
        //var urlParts = $window.location.pathname.split("/");
        //var baseUrl = "http://localhost:3000/api/projects/";
        //var projectName = urlParts[urlParts.length - 1];

        //var projectUrl = baseUrl + projectName;
        //$http.get(projectUrl)
        //    .then(function (result) {
        //        // success
        //        $scope.project = result.data;
        //    }, function (err) {
        //        // error
        //    console.log("Error getting the project: " + err);
        //});
        $scope.project = {
            projectId: "kaswan",
            name: "Kaswan Project",
            projectDesription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
            homepageImage: "/img/portfolio/kaswan/proj01_450x300.jpg",
            portfolioDetailImage: "/img/portfolio/kaswan/proj01_1100x300.jpg",
            portfolioLink: "/portfolio/project/kaswan",
            homeSpecs :
 {
                projectType: "Timber Frame",
                squareFt: "9,500",
                bedrooms: "4",
                bathrooms: "3",
                planDesign: "Custom Design Firm"
            },
            awards: [
                {
                description: "2012 Jackson Valley Best Home Design",
                url: "#"
            }, {
                description: "Best Interior Design",
                url: ""
            }],
            gallery: [
                {
                src: "/img/portfolio/kaswan/proj02_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "0"
            }, {
                src: "/img/portfolio/kaswan/proj03_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "5"
            }, {
                src: "/img/portfolio/kaswan/proj04_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "10"
            }, {
                src: "/img/portfolio/kaswan/proj05_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "15"
            }, {
                src: "/img/portfolio/kaswan/proj06_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "20"
            }, {
                src: "/img/portfolio/kaswan/proj07_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "25"
            }, {
                src: "/img/portfolio/kaswan/proj08_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "30"
            }, {
                src: "/img/portfolio/kaswan/proj09_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "35"
            }, {
                src: "/img/portfolio/kaswan/proj10_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "40"
            }, {
                src: "/img/portfolio/kaswan/proj11_750x500.jpg",
                alt: "Kaswan Timber Frame Project",
                order: "45"
            }]
        };

    }]);

})(window.angular);