
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

    function displayit() {

        var city = $(this).attr("data-name");
        let APIkey = "679028e3f0c8fba1d84518258a6a9385&APPID=679028e3f0c8fba1d84518258a6a9385";
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "Atlanta,"+ "us&units=imperial&mode=json&appid=" + APIkey;
       
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
              console.log(queryURL);
              console.log(response);

            function displaymain(){
                //name 
                var cityname = response.city.name;
                // and date 
                var date = response.list[0].dt_txt; 
                
                //append this to the html
                //create element with text 
                var cityHeader = $("<h3>").text(cityname + " (" + date +")")//icon need to be added to the end)
                //append this to the html

                $(".city").append(cityHeader);
                //grab weather icon
                var iconcode = response.list[0].weather[0].icon;
                var getIcon = "http://openweathermap.org/img/w/" + iconcode + ".png";
                console.log(getIcon);
                
                //create element with image 
                var icon = $("<img>").attr("src", getIcon);
                cityHeader.append(icon)
    
                //temperature
                var temperature = response.list[0].main.temp; 
                //append this to the html 
                $(".temperature").text("Temperature:  " + temperature +  " °F");
    
                //humidity
                var humidity = response.list[0].main.humidity; 
                 //append this to the html 
                 $(".humidity").text("Humidity: " + humidity + "%");
                //wind speed
                var windSpeed = response.list[0].wind.speed; //no need to convert to m/h
                //append this to the html 

                
                $(".windspeed").text("Wind Speed: " + windSpeed + " mph");
                
            }
            //to get uv pull lat and lon 
           const lat = response.city.coord.lat;
            const lon = response.city.coord.lon;
            
            // function uv(){
            //     let APIkey = "679028e3f0c8fba1d84518258a6a9385&APPID=679028e3f0c8fba1d84518258a6a9385";
            //     let queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid={" + APIkey + "}&lat={" + lat + "}&lon={" + lon + "}";
                
            //     $.ajax({
            //         url: queryURL,
            //         method: "GET"
            //     })
            //     .then(function(uvresponse) {
            //         console.log(queryURL);
            //         console.log(uvresponse);
            //             //uv index
            //             // var uvIndex = uvresponse.value;
            //             // console.log(uvIndex)
            //             // //append this to the html 
            //             // $(".uv-index").text("UV Index: " + uvIndex);
            //         })
            //     } uv()
                
                //5 day forcast
                function displayforecast(){
                    var forecast = []
                }displayforecast()
                displaymain()

          })
    } 
     displayit()
});