
$(".btn").click(function(e){
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: apiCall(),
        success: function(data) {
            console.log(data);
        }
    })
})

function searchWeather(search) {

}

function apiCall() {
    var searchCity = $(".search-bar").val();
    var apiKEY = "&appid=795602cf096a742cddb6ae84e10eaedd";
    var apiURL = "https://api.openweathermap.org/data/2.5/weather";
    var apiUNITS = "&units=imperial";
    var apiSEARCH = "?q=" + searchCity;
    return apiURL + apiSEARCH + apiUNITS + apiKEY;
}

