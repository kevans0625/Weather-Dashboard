
$(document).ready(function() {  

    var cities = ["Houston", "St. Louis", "Atlanta", "Miami", "San Diego", "Philly"]
    // create a function to run display search cities 
    function rendercities(){
           
        $(".city-view").empty();
for( var i=0; i<cities.length; i++){
    //create element
    var cityEL = $("<button>");
    //add attributes 
    cityEL.attr("data-name", cities[i]);
    cityEL.addClass("newCity");
    //add text
    cityEL.text(cities[i]);
    //append elemenent 
    $(".city-view").prepend(cityEL);
}
rendercities()
var cities = ["Houston", "St. Louis", "Atlanta", "Miami", "San Diego", "Philly"]
// create a function to run display search cities 
function rendercities(){
       
    $(".city-view").empty();
for( var i=0; i<cities.length; i++){
//create element
var cityEL = $("<button>");
//add attributes 
cityEL.attr("data-name", cities[i]);
cityEL.addClass("newCity");
//add text
cityEL.text(cities[i]);
//append elemenent 
$(".city-view").prepend(cityEL);
}

// create a for loop to run the through the array of cities whehn the city button is clicked
//selected city should display in the display div
//selected city 5 day forcast should appear in in each ot the containers 
}rendercities()

// create event listener to trigger city rendering

$("#add-city").on("click", function(event){
    event.preventDefault();
    var city = $("#city-input").val().trim();
    cities.push(city);
    console.log(city);
    rendercities();
})


});