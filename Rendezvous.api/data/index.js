(function (data) {

    var database = require("./database");
    var seedData = require("./seedData");

    data.getProjects = function(next) {
        database.getDb(function(err, db) {
            if (err) {
                next(err, null);
            } else {
                db.projects.find().toArray(function(err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    data.getProject = function(projectId, next) {
        database.getDb(function(err, db) {
            if (err) {
                next(err);
            } else {
                db.projects.findOne({ projectId: projectId }, next);
            }
        });
    };

    data.getServices = function(next) {
        database.getDb(function(err, db) {
            if (err) {
                next(err, null);
            } else {
                db.services.find().toArray(function(err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    data.getTeamMembers = function(next) {
        database.getDb(function(err, db) {
            if (err) {
                next(err, null);
            } else {
                db.teamMembers.find().sort({order: 1}).toArray(function(err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    function seedDatabase() {
        database.getDb(function(err, db) {
            if (err) {
                console.log("Failed to seed database: " + err);
            } else {
                // Projects Data
                db.projects.count(function(err, count) {
                    if (err) {
                        console.log("Failed to retrieve projects count: " + err);
                    } else {
                        if (count == 0) {
                            console.log("Seeding the database with projects...");
                            seedData.projects.forEach(function(item) {
                                db.projects.insert(item, function(err) {
                                    if (err) console.log("Failed to insert project into database: " + err);
                                });
                            });
                        } else {
                            console.log("Database - projects already seeded.");
                        }
                    }
                });
                // Services Data
                db.services.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve services count: " + err);
                    } else {
                        if (count == 0) {
                            console.log("Seeding the database with services...");
                            seedData.services.forEach(function (item) {
                                db.services.insert(item, function (err) {
                                    if (err) console.log("Failed to insert services into database: " + err);
                                });
                            });
                        } else {
                            console.log("Database - services already seeded.");
                        }
                    }
                });
                // Team Member Data
                db.teamMembers.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve teamMembers count: " + err);
                    } else {
                        if (count == 0) {
                            console.log("Seeding the database with teamMembers...");
                            seedData.teamMembers.forEach(function (item) {
                                db.teamMembers.insert(item, function (err) {
                                    if (err) console.log("Failed to insert teamMembers into database: " + err);
                                });
                            });
                        } else {
                            console.log("Database - teamMembers already seeded.");
                        }
                    }
                });
            }

        });
    }

    seedDatabase();

})(module.exports);
