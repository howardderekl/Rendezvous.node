(function(homeController) {

    homeController.init = function (app) {

        var data = require("../data");

        app.get("/", function (req, res) {
            data.getProjects(function (prjErr, prjResults) {
                data.getServices(function (srvErr, srvResults) {
                    data.getTeamMembers(function(tmErr, tmResults) {
                        res.render('index', { title: 'Rendezvous Custom Homes', error: prjErr + ' - ' + srvErr + ' - ' + tmErr, projects: prjResults, services: srvResults, teamMembers: tmResults });
                    });
                    
                });
            });
        });
        
        app.get("/services", function (req, res) {
            res.render('services/index', { title: 'Rendezvous Custom Homes - Services' });
        });

        app.get("/portfolio", function(req, res) {
            res.render('portfolio/index', { title: 'Rendezvous Custom Homes - Portfolio' });
        });

        app.get("/portfolio/kaswan", function (req, res) {
            res.render('portfolio/kaswan/index', { title: 'Rendezvous Custom Homes - Portfolio - Kaswan Project' });
        });

        app.get("/portfolio/springcreek", function (req, res) {
            res.render('portfolio/springcreek/index', { title: 'Rendezvous Custom Homes - Portfolio - Spring Creek Project' });
        });

        app.get("/portfolio/baxter", function (req, res) {
            res.render('portfolio/baxter/index', { title: 'Rendezvous Custom Homes - Portfolio - Baxter Project' });
        });

    };
})(module.exports);