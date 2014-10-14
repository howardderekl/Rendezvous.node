(function (servicesController) {

    var data = require("../data");

    servicesController.init = function (app) {

        app.get("/api/services", function(req, res) {

            data.getServices(function (err, services) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Methods', 'GET,POST');
                    res.set("Content-Type", "application/json");
                    res.send(services);
                }
            });
        });

    };

})(module.exports);
