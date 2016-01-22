$("document").ready(function () {
    var template = $("#itemTemplate").html(),
    // Handlebars compiles the template into a callable function
        renderer = Handlebars.compile(template),
    // call the compiled function with the template data
        result = renderer({
            "employees" : [{
                "name" : "Henry Handsome",
                "phone" : "+1-212-555-1234",
                "email" : "pensive@example.com",
                "title" : "Senior VP of Basketweaving",
                "fulltime" : true
            }, {
                "name" : "Penelope Persistent",
                "phone" : "+1-212-555-8000",
                "email" : "truthful@example.com",
                "title" : "Principal Understudy",
                "fulltime" : false
            }, {
                "name" : "Sam Serendipity",
                "phone" : "+1-212-555-9876",
                "email" : "helpful@example.com",
                "title" : "Chef Cook and Bootle Washer",
                "fulltime" : true
            }, {
                "name" : "Tom Terriffic",
                "phone" : "+1-212-555-0011",
                "email" : "grumpy@example.com",
                "title" : "Janitor",
                "fulltime" : false
            }]
        });
    $("#container").html(result);
});
