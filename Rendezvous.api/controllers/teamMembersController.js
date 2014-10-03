(function (teamMembersController) {

    var data = require("../data");

    teamMembersController.init = function (app) {

        app.get("/api/team_members", function(req, res) {

            data.getTeamMembers(function (err, teamMembers) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(teamMembers);
                }
            });
        });

    };

})(module.exports);
