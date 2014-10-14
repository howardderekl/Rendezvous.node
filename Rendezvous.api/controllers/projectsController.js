(function (projectsController) {

    var data = require("../data");

    projectsController.init = function (app) {

        app.get("/api/projects", function(req, res) {

            data.getProjects(function (err, projects) {
               if (err) {
                   res.send(400, err);
                } else {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Methods', 'GET,POST');
                   res.set("Content-Type", "application/json");
                   res.send(projects);
               }
            });
        });

        app.get("/api/projects/:projectId", function (req, res) {

            var projectId = req.params.projectId;

            data.getProject(projectId, function(err, project) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Methods', 'GET,POST');
                    res.set("Content-Type", "application/json");
                    res.send(project);
                }
            });
        });
    }

})(module.exports);
