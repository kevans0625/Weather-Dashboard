
$(document).ready(function () {

    var cities = ["Houston", "St. Louis", "Atlanta", "Miami", "San Diego", "Philadelphia"]
    function displayit() {

        var city = $(this).attr("data-name");

        let APIkey = "679028e3f0c8fba1d84518258a6a9385&APPID=679028e3f0c8fba1d84518258a6a9385";
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=json&appid=" + APIkey;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                const lat = response.city.coord.lat;
                const lon = response.city.coord.lon;

                function displaymain() {
                    $(".city").empty()
                    //name
                    var cityname = response.city.name;
                    // and date 
                    var date = response.list[0].dt_txt;

                    const dateString = moment(date).format("MM-DD-YY");
                    //append this to the html
                    //create element with text 
                    var cityHeader = $("<h3>").text(cityname + " (" + dateString + ")")//icon need to be added to the end)
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
                    var temperature = Math.floor(response.list[0].main.temp);

                    //append this to the html 
                    $(".temperature").text("Temperature:  " + temperature + "° F");

                    //humidity
                    var humidity = response.list[0].main.humidity;
                    //append this to the html 
                    $(".humidity").text("Humidity: " + humidity + "%");
                    //wind speed
                    var windSpeed = Math.floor(response.list[0].wind.speed); //no need to convert to m/h
                    //append this to the html

                    $(".windspeed").text("Wind Speed: " + windSpeed + " mph");

                    //5 day forecast 
                    function forecast(i) {
                        console.log(response.list[5]);
                        console.log(response.list[10]);
                        console.log(response.list[20]);
                        console.log(response.list[25]);
                        console.log(response.list[35]);

                        // create a div with the class of col-sm-3
                        var col = $("<div>").addClass("col-sm-2 card text-white bg-primary")
                        var card = $("<div>").addClass("card-body")
                        col.append(card)
                        $(".forecast").append(col)
                        //text 
                        var date = response.list[i].dt_txt;
                        const dateString = moment(date).format("MM/DD/YYYY");
                        //append 
                        var dateEl = $("<p>").text(dateString)
                        card.append(dateEl)

                        //icon 
                        var iconcode = response.list[i].weather[0].icon;
                        var getIcon = "http://openweathermap.org/img/w/" + iconcode + ".png";
                        var iconEl = $("<img>").attr("src", getIcon);

                        card.append(iconEl)


                        //temperature 
                        //text 
                        var temperature = Math.floor(response.list[i].main.temp);
                        //append this to the html 

                        console.log(temperature)
                        //append 
                        var tempEl = $("<p>").addClass("card-text")
                        tempEl.text(temperature + "° F");
                        card.append(tempEl)
                        //humidity 
                        var humidity = response.list[i].main.humidity;
                        //append this to the html 

                        var humEl = $("<p>").addClass("card-text")
                        humEl.text("Humidity: " + humidity + "%");
                        card.append(humEl)

                    } 
                    forecast(5)
                    forecast(15)
                    forecast(25)
                    forecast(30)
                    forecast(35)

                    uv(lat,lon);
                };

                displaymain()
                


            })

    }


    //to get uv pull lat and lon 
    
    
    function uv(lat,lon) {
       
        let APIkey = "679028e3f0c8fba1d84518258a6a9385&APPID=679028e3f0c8fba1d84518258a6a9385";
        let queryURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${APIkey}`
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (uvresponse) {
               // console.log(queryURL);
                console.log(uvresponse);

                var uvIndex = parseInt(uvresponse.value);
                console.log(uvIndex)
                

                //append this to the html 
                $(".uv-index").text("UV Index: " + uvIndex);
                
                if (uvIndex < 2){
                    $(".uv-index").addClass("favorable") 

                } else if (uvIndex => 2 && uvIndex < 6){
                    $(".uv-index").removeClass("favorable") 
                    $(".uv-index").removeClass("severe") 
                    $(".uv-index").addClass("moderate") 
                } else (uvIndex > 6) 
                    $(".uv-index").removeClass("favorable") 
                    $(".uv-index").addClass("severe") 
                    $(".uv-index").removeClass("moderate") 
                
            })
    } 
    



// create a function to run display search cities 
function rendercities() {
    $(".city-view").empty();
    for (var i = 0; i < cities.length; i++) {
        //create element
        var cityEL = $("<button>");
        //add attributes 
        cityEL.attr("data-name", cities[i]);
        cityEL.addClass("city-btn btn-dark");
        //add text
        cityEL.text(cities[i]);
        //append elemenent 
        $(".city-view").prepend(cityEL);

    }

}

// create a for loop to run the through the array of cities whehn the city button is clicked
//selected city should display in the display div
//selected city 5 day forcast should appear in in each ot the containers 


// create event listener to trigger city rendering

$("#add-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val().trim();
    cities.push(city);
    console.log(city);
    rendercities()
});
function greeting() {
    $(".greeting").empty()
}

function emptyForecast() {
    $(".forecast").empty()
}
// Adding a click event listener to all elements with a class of "city-btn"
$(document).on("click", ".city-btn", displayit);
$(document).on("click", ".city-btn", greeting);
$(document).on("click", ".city-btn", emptyForecast);
rendercities()



})
