
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
});