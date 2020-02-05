
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
                    function day1() {
                        console.log(response.list[5]);
                        console.log(response.list[10]);
                        console.log(response.list[20]);
                        console.log(response.list[25]);
                        console.log(response.list[35]);

                        // create a div with the class of col-sm-3

                     
                        //text 
                        var date = response.list[5].dt_txt;
                        const dateString = moment(date).format("MM/DD/YYYY");
                        //append 
                        $(".Day1").text(dateString)
                        //icon 
                        var iconcode = response.list[5].weather[0].icon;
                        var getIcon = "http://openweathermap.org/img/w/" + iconcode + ".png";
                        var icon = $("<img>").attr("src", getIcon);
                    
                        $(".icon1").html(icon)

                        //temperature 
                        //text 
                        var temperature = Math.floor(response.list[5].main.temp);
                        //append this to the html 
                        $(".temp1").text("Temperature:  " + temperature + "° F");
                        console.log(temperature)
                        //append 
                        //humidity 
                        var humidity = response.list[5].main.humidity;
                        //append this to the html 
                        $(".hum1").text("Humidity: " + humidity + "%");
                       
                    } day1()

                    function day2() {
                     
                        console.log(response.list[10]);
                        console.log(response.list[20]);
                        console.log(response.list[25]);
                        console.log(response.list[35]);

                        // create a div with the class of col-sm-3

                     
                        //text 
                        var date = response.list[10].dt_txt;
                        const dateString = moment(date).format("MM/DD/YYYY");
                        //append 
                        $(".Day2").text(dateString)
                        //icon 
                        var iconcode = response.list[10].weather[0].icon;
                        var getIcon = "http://openweathermap.org/img/w/" + iconcode + ".png";
                        var icon = $("<img>").attr("src", getIcon);
                    
                        $(".icon2").html(icon)

                        //temperature 
                        //text 
                        var temperature = Math.floor(response.list[10].main.temp);
                        //append this to the html 
                        $(".temp2").text("Temperature:  " + temperature + "° F");
                        console.log(temperature)
                        //append 
                        //humidity 
                        var humidity = response.list[10].main.humidity;
                        //append this to the html 
                        $(".hum2").text("Humidity: " + humidity + "%");
                       
                    } day2()
                    function day3() {
                     
                        
                        console.log(response.list[20]);
                        console.log(response.list[25]);
                        console.log(response.list[35]);

                        // create a div with the class of col-sm-3

                     
                        //text 
                        var date = response.list[20].dt_txt;
                        const dateString = moment(date).format("MM/DD/YYYY");
                        //append 
                        $(".Day3").text(dateString)
                        //icon 
                        var iconcode = response.list[20].weather[0].icon;
                        var getIcon = "http://openweathermap.org/img/w/" + iconcode + ".png";
                        var icon = $("<img>").attr("src", getIcon);
                    
                        $(".icon3").html(icon)

                        //temperature 
                        //text 
                        var temperature = Math.floor(response.list[20].main.temp);
                        //append this to the html 
                        $(".temp3").text("Temperature:  " + temperature + "° F");
                        console.log(temperature)
                        //append 
                        //humidity 
                        var humidity = response.list[20].main.humidity;
                        //append this to the html 
                        $(".hum3").text("Humidity: " + humidity + "%");
                       
                    } day3()
                    function day4() {
                     
                        console.log(response.list[25]);
                        console.log(response.list[35]);

                        // create a div with the class of col-sm-3

                     
                        //text 
                        var date = response.list[25].dt_txt;
                        const dateString = moment(date).format("MM/DD/YYYY");
                        //append 
                        $(".Day4").text(dateString)
                        //icon 
                        var iconcode = response.list[25].weather[0].icon;
                        var getIcon = "http://openweathermap.org/img/w/" + iconcode + ".png";
                        var icon = $("<img>").attr("src", getIcon);
                    
                        $(".icon4").html(icon)

                        //temperature 
                        //text 
                        var temperature = Math.floor(response.list[25].main.temp);
                        //append this to the html 
                        $(".temp4").text("Temperature:  " + temperature + "° F");
                        console.log(temperature)
                        //append 
                        //humidity 
                        var humidity = response.list[25].main.humidity;
                        //append this to the html 
                        $(".hum4").text("Humidity: " + humidity + "%");
                       
                    } day4()
                    function day5() {
                    
                        console.log(response.list[35]);

                        // create a div with the class of col-sm-3

                     
                        //text 
                        var date = response.list[35].dt_txt;
                        const dateString = moment(date).format("MM/DD/YYYY");
                        //append 
                        $(".Day5").text(dateString)
                        //icon 
                        var iconcode = response.list[35].weather[0].icon;
                        var getIcon = "http://openweathermap.org/img/w/" + iconcode + ".png";
                        var icon = $("<img>").attr("src", getIcon);
                    
                        $(".icon5").html(icon)

                        //temperature 
                        //text 
                        var temperature = Math.floor(response.list[35].main.temp);
                        //append this to the html 
                        $(".temp5").text("Temperature:  " + temperature + "° F");
                        console.log(temperature)
                        //append 
                        //humidity 
                        var humidity = response.list[35].main.humidity;
                        //append this to the html 
                        $(".hum5").text("Humidity: " + humidity + "%");
                       
                    } day5()
                };
                displaymain()
                
                
    })

}
                    //     //     var date = response.list[0].dt_txt; 
                    //     //     const timeString = moment(date).format("YYYY-DD-MM");
                    //     //     console.log(timeString)
                    //     //     //to get uv pull lat and lon 
                    //     //    const lat = response.city.coord.lat;
                    //     //     const lon = response.city.coord.lon;
                    //     //     console.log(lat)
                    //     //     function uv(){
                        //     //         let APIkey = "679028e3f0c8fba1d84518258a6a9385&APPID=679028e3f0c8fba1d84518258a6a9385";
                        //     //         let queryURL = "https://crossorigin.me/https://api.openweathermap.org/v3/uvi/" + lat + "," + lon + "/" + timeString + "T12:00:00Z.json?appid=" + APIkey;
                        //     //         $.ajax({
                            //     //             url: queryURL,
                            //     //             method: "GET"
                            //     //         })
                            //     //         .then(function(uvresponse) {
                                //     //             console.log(queryURL);
                                //     //             console.log(uvresponse);
                                //     //                 //uv index
                                //     //                 // var uvIndex = uvresponse.value;
                                //     //                 // console.log(uvIndex)
                                //     //                 // //append this to the html 
                                //     //                 // $(".uv-index").text("UV Index: " + uvIndex);
                                //     //             })
                                //     //         } uv()

                                        // })

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
    
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".city-btn", displayit);

rendercities()
});
