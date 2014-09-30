(function(seedData) {
    seedData.projects = [
        {
            name: "Kaswan Project",
        projectDesription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
        homepageImage: "/img/portfolio/kaswan/proj01_450x300.jpg",
            portfolioLink: "/portfolio/kaswan",
            homeSpecs : 
            {
                projectType: "Timber Frame",
                squareFt: "9,500",
                beadrooms: "4",
                bathrooms: "3",
                planDesign: "Custom Design Firm"
            },
            awards: [
            {
                description: "2012 Jackson Valley Best Home Design",
                url: "#"    
            }, {
                description: "Best Interior Design",
                url: ""
        }]
        
        }, {
        name: "Spring Creek Project",
        projectDesription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
        homepageImage: "/img/portfolio/paustenbach/proj01.jpg",
        portfolioLink: "/portfolio/springcreek",
        homeSpecs : 
 {
            projectType: "Custom Log",
            squareFt: "12,500",
            beadrooms: "10",
            bathrooms: "8",
            planDesign: "Custom Design Firm"
        },
        awards: [
            {
            description: "2013 Huge Log Home Award",
            url: "#"
        }, {
            description: "Best Interior Design",
            url: ""
        }]
        }, {
        name: "Baxter Project",
        projectDesription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
        homepageImage: "/img/portfolio/baxter/proj01.jpg",
        portfolioLink: "/portfolio/baxter",
        homeSpecs : 
 {
            projectType: "Custom Log",
            squareFt: "14,000",
            beadrooms: "8",
            bathrooms: "10",
            planDesign: "Custom Design Firm"
        },
        awards: [
            {
            description: "2012 Jackson Valley Best Home Design",
            url: "#"
        }, {
            description: "Best Interior Design",
            url: ""
        }]
        }
    ];

    seedData.services = [
        {
        name: "Custom Wood",
        homepageImage: "/img/services/wood.jpg",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
        }, {
        name: "Timber Frame",
        homepageImage: "/img/services/TimberFrame.jpg",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
        }, {
        name: "Western Contemporary",
        homepageImage: "/img/services/WesternContemporary.jpg",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
        }, {
        name: "Western Modern",
        homepageImage: "/img/services/WesternModern.jpg",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
        } , {
        name: "Historyic",
        homepageImage: "/img/services/Historic.jpg",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
        } , {
        name: "Green",
        homepageImage: "/img/services/Green.jpg",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
        }
    ];

    seedData.teamMembers = [
        {
        name: "Jeff Jeppesen",
        title: "Co-Owner and Co-Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.",
        homepageImage: "http://placehold.it/450x300",
        order: "0",
        contactInfo: {
            email: "jeff@rchjh.com",
            facebook: "https://www.facebook.com/jeffrchjh"
        }
        } , {
        name: "Paul Wetzel",
        title: "Co-Owner and Co-Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.",
        homepageImage: "http://placehold.it/450x300",
        order: "1",
        contactInfo: {
            email: "paul@rchjh.com"
        }    
        } , {
        name: "Chad Thompson",
        title: "Supervisor",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.",
        homepageImage: "http://placehold.it/450x300",
        order: "2",
        contactInfo: {
            email: "chad@rchjh.com"
        }
        }
    ];
})(module.exports);