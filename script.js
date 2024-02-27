// $(document).ready(function() {
//     // Hide all content except for the home section initially
//     $("#activities, #about, #map, #fact").hide();

//     // Handle navigation clicks
//     $("nav ul li a").click(function() {
//         var target = $(this).attr("href");
//         $("#content > div").hide();
//         $(target).show();
//     });
// });
// $(document).ready(function() {
//     $("#data-form").submit(function(e) {
//         e.preventDefault();
        
//         var name = $("#name").val();
//         var location = $("#location").val();
//         var category = $("#category").val();
//         var description = $("#description").val();
        
//         var newData = new DataEntry(name, location, category, description);
//         dataEntries.push(newData);
        
//         // Clear form fields after submission
//         $("#name, #location, #description").val('');
//         $("#category").val('Option 1');
//     });
// });
// $(document).ready(function() {
//     // Function to display data entries
//     function displayDataEntries() {
//         $("#entries").empty();
//         dataEntries.forEach(function(entry) {
//             var listItem = $("<li>").text(entry.name);
//             $("#entries").append(listItem);
//         });
//     }
    
//     // Populate data entries initially
//     displayDataEntries();
// });
// $(document).ready(function() {
//     // Function to display data entries
//     function displayDataEntries() {
//         $("#entries").empty();
//         dataEntries.forEach(function(entry, index) {
//             var listItem = $("<li>").text(entry.name);
//             listItem.click(function() {
//                 // Handle click action here
//                 // For now, let's just alert the description
//                 alert(entry.description);
//             });
//             $("#entries").append(listItem);
//         });
//     }
    
//     // Populate data entries initially
//     displayDataEntries();
// });


//   function DataEntry(name, location, category, description) {
//     this.name = name;
//     this.location = location;
//     this.category = category;
//     this.description = description;
// }

// var dataEntries = [];




//let activities_List = [];

//function pushData(){
   // let view =document.getElementById("view");
   // let newtd = document.createElement("li");
   // let event_type = document.getElementById("event_type").value; 
   // let event_name = document.getElementById("Eventname").value;
   // let event_location = document.getElementById("Event_Location").value;
   // let event_time = document.getElementById("Event_Time").value;
   // var node = document.createTextNode(event_type+" |"+ event_name + event_location + event_time);
   // newtd.appendChild(node);
    //view.appendChild(newtd)
//}
//navbar = document.querySelector(".navbar").querySelectorAll("a");
//console.log(navbar);
//navbar.forEach(element =>{
//  element.addEventIistener("click",function(){
 //   navbar.forEach(nav => nav.classList.remove("active"))
  //  this.classList.add("active");
  
//})

          
//$(".activitiespage").click(function() {
       // $("#event").css("visibility", "hidden");
       // $("#location").css("visibility", "hidden");
       // $("#map").css("visibility", "hidden");

<script>
  let song_List = [];

function pushData(){
    let view =document.getElementById("view");
    let newtd = document.createElement("li");
    let song_artist = document.getElementById("Song_artist").value; 
    let song_name = document.getElementById("Song_name").value;
    let song_year = document.getElementById("Song_year").value;
    let song_link = document.getElementById("Song_link").value;
    let song_rate = document.getElementById("Song_rate")
    var node = document.createTextNode(+" song_artist "+ song_name + song_rate + song_year + song_link);
    newtd.appendChild(node);
    view.appendChild(newtd)
}
navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);
navbar.forEach(element =>{
  element.addSongIistener("click",function(){
    navbar.forEach(nav => nav.classList.remove("active"))
    this.classList.add("active");
  
})

          
$(".addSong").click(function() {
        $("#add").css("visibility", "hidden");
        $("#list").css("visibility", "hidden");
       
  
    });
    $(document).ready(function() {
    var song = [];

    $("#addSong").click(function() {
        var title = $("#title").val();
        var genre = $("#genre").val();
        var rating = $("#rating").val();
        var year = $("#year").val();

        song.push({
            title: title,
            genre: genre,
            rating: rating,
            year: year
        });

        $("#addSong").append(
            `<tr>
                <td>${title}</td>
                <td>${genre}</td>
                <td>${rating}</td>
                <td>${year}</td>
            </tr>`
        );

        $("#title").val("");
        $("#genre").val("");
        $("#rating").val("");
        $("#year").val("");
    });
});
$(document).ready(function() {
        // ... (existing code from part 3)

        $("#sort-genre").click(function() {
            list.sort(function(a, b) {
                return a.genre.localeCompare(b.genre);
            });

            $("#list").empty();

            for (var i = 0; i < list.length; i++) {
                $("#list").append(
                    `<tr>
                        <td>${list[i].title}</td>
                        <td>${list[i].genre}</td>
                        <td>${list[i].rating}</td>
                        <td>${list[i].year}</td>
                    </tr>`
                );
            }
        });
    });
    $(document).ready(function() {
        // ... (existing code from part 3)

        $("#sort-rating").click(function() {
            list.sort(function(a, b) {
                return b.rating - a.rating;
            });

            $("#list").empty();

            for (var i = 0; i < list.length; i++) {
                $("#list").append(
                    `<tr>
                        <td>${list[i].title}</td>
                        <td>${list[i].genre}</td>
                        <td>${list[i].rating}</td>
                        <td>${list[i].year}</td>
                    </tr>`
                );
            }
        });
    });
</script>













  


