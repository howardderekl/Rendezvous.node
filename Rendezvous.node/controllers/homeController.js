(function(homeController) {

    homeController.init = function (app) {

        var data = require("../data");

        app.get("/", function (req, res) {
            data.getProjects(function (prjErr, prjResults) {
                data.getServices(function (srvErr, srvResults) {
                    data.getTeamMembers(function(tmErr, tmResults) {
                        res.render('index', {
                            title: 'Rendezvous Custom Homes', 
                            prjError: prjErr,
                            srvError: srvErr,
                            tmError: tmErr, 
                            projects: prjResults, 
                            services: srvResults, 
                            teamMembers: tmResults
                        });
                    });
                    
                });
            });
        });
        
        app.get("/services", function (req, res) {
            data.getServices(function(err, results) {
                res.render('services/index', { title: 'Rendezvous Custom Homes - Services', error: err, services: results });
            });
        });
        
        // Portfolio Section
        app.get("/portfolio", function (req, res) {
            data.getProjects(function(err, results) {
                res.render('portfolio/index', { title: 'Rendezvous Custom Homes - Portfolio', error: err, projects: results });
            });
        });

        app.get("/portfolio/project/:projectId", function (req, res) {
            var projectId = req.params.projectId;

            data.getProject(projectId, function (err, results) {
                res.render('portfolio/project/index', { title: 'Rendezvous Custom Homes - Project - ' + projectId, error: err, project: results });
            });
        });

        // Admin Section
        /*
        app.get("/admin", function(req, res) {
            res.render('admin/index', {
                title: 'Rendezvous Admin Panel - Add Project',
                newPrjError: req.flash("newProjectName"),
            });
        });


        // POSTS
        app.post("/newProject", function(req, res) {
            var projectName = req.body.projectName;

            data.createNewProject(projectName, function(err) {
                if (err) {
                    //handle error
                    console.log(err);
                    req.flash("newProjectName", err);
                    res.redirect("/admin");
                } else {
                    res.redirect("/portfolio/" + projectName);
                }
            });
        });
        */
    };
})(module.exports);