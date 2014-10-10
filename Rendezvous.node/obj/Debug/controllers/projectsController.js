(function(projectsController) {

    var data = require("../data");

    projectsController.init = function(app) {

        app.get("/api/projects/:projectId", function (req, res) {
            
            var projectId = req.params.projectId;

            data.getProject(projectId, function(err, project) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(project);
                }
            });
        });

        app.post("/api/projects/addProject", function (req, res) {
            
            var projectToInsert = {
                projectId: req.body.projectId,
                name: req.body.name,
                projectDescription: req.body.description,
                homeSpecs: {
                    projectType: "Timber Frame",
                    squareFt: "9,500",
                    beadrooms: "4",
                    bathrooms: "3",
                    planDesign: "Custom Design Firm"
                },
                homepageImage: req.body.homepageImage,
                portfolioLink: req.body.portfolioLink
            };
            
            data.addProject(projectToInsert, function (err) {
                if (err) {
                    res.send(400, "failed to add project to data store.");
                } else {
                    res.set("Content-type", "application/json");
                    res.send(201, projectToInsert);
                }

            });
        });
    };

    

})(module.exports);