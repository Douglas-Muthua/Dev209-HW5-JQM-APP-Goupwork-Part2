$(document).ready(function() {
    // Hide all content except for the home section initially
    $("#activities, #about, #map, #fact").hide();

    // Handle navigation clicks
    $("nav ul li a").click(function() {
        var target = $(this).attr("href");
        $("#content > div").hide();
        $(target).show();
    });
});
$(document).ready(function() {
    $("#data-form").submit(function(e) {
        e.preventDefault();
        
        var name = $("#name").val();
        var location = $("#location").val();
        var category = $("#category").val();
        var description = $("#description").val();
        
        var newData = new DataEntry(name, location, category, description);
        dataEntries.push(newData);
        
        // Clear form fields after submission
        $("#name, #location, #description").val('');
        $("#category").val('Option 1');
    });
});
$(document).ready(function() {
    // Function to display data entries
    function displayDataEntries() {
        $("#entries").empty();
        dataEntries.forEach(function(entry) {
            var listItem = $("<li>").text(entry.name);
            $("#entries").append(listItem);
        });
    }
    
    // Populate data entries initially
    displayDataEntries();
});
$(document).ready(function() {
    // Function to display data entries
    function displayDataEntries() {
        $("#entries").empty();
        dataEntries.forEach(function(entry, index) {
            var listItem = $("<li>").text(entry.name);
            listItem.click(function() {
                // Handle click action here
                // For now, let's just alert the description
                alert(entry.description);
            });
            $("#entries").append(listItem);
        });
    }
    
    // Populate data entries initially
    displayDataEntries();
});


  function DataEntry(name, location, category, description) {
    this.name = name;
    this.location = location;
    this.category = category;
    this.description = description;
}

var dataEntries = [];