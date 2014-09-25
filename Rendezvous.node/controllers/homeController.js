(function(homeController) {

    homeController.init = function(app) {

        app.get("/", function(req, res) {
            res.render('index', { title: 'Rendezvous Custom Homes' });
        });

        app.get("/portfolio", function(req, res) {
            res.render('portfolio/index', { title: 'Rendezvous Custom Homes - Portfolio' });
        });

    };
})(module.exports);