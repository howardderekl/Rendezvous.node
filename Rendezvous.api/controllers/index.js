(function (controllers) {

    var projectsController = require("./projectsController");
    var servicesController = require("./servicesController");
    var teamMembersController = require("./teamMembersController");

    controllers.init = function(app) {

        projectsController.init(app);
        servicesController.init(app);
        teamMembersController.init(app);

    }

})(module.exports);;
