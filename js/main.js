
$(document).ready(function(){

    $(".btn").click(function(e){
        e.preventDefault();
        searchWeather();
    })

    function searchWeather() {
        var searchCity = $(".search-bar").val();
        var apiKEY = "&appid=795602cf096a742cddb6ae84e10eaedd";
        var apiURL = "https://api.openweathermap.org/data/2.5/weather";
        var apiUNITS = "&units=imperial";
        var apiSEARCH = "?q=" + searchCity;
        var apiCALL = apiURL + apiSEARCH + apiUNITS + apiKEY;
        $.ajax({
            type: "GET",
            url: apiCALL,
            success: function(data) {
                if(history.indexOf(searchCity) === -1) {
                    history.push(searchCity);
                    window.localStorage.setItem("history", JSON.stringify(history));
                }

                makeRow(searchCity);

                $(".card-display-today").empty();

                var card = $(".card-display-today");
                var title = $("<h3>").text("Today at " + data.name + " on " + moment().format("MMMM DD YYYY") );
                card.append(title);
            }
        })
    }

    // Gets history
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    if(history.length > 0) {
        searchWeather(history[history.length - 1]);
    }
    for(var i = 0; i < history.length; i++) {
        makeRow(history[i]);
    }

    function makeRow(text) {
        var li = $("<li>").text(text);
        $(".searched-city-append").append(li);
    }
})

