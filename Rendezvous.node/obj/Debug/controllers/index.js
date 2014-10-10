(function(controllers) {

    var homeController = require('./homeController');
    var projectsController = require('./projectsController');

    controllers.init = function(app) {
        homeController.init(app);
        projectsController.init(app);
    };

})(module.exports);