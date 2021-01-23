
$(".btn").click(function(e){

    var searchCity = $(".search-bar").val();
    var apiKEY = "&appid=795602cf096a742cddb6ae84e10eaedd";
    var apiURL = "https://api.openweathermap.org/data/2.5/weather";
    var apiUNITS = "&units=imperial";
    var apiSEARCH = "?q=" + searchCity;
    var apiLINK = apiURL + apiSEARCH + apiUNITS + apiKEY;

    e.preventDefault();

    $.ajax({
        type: "GET",
        url: apiLINK,
        success: function(data) {
            console.log(data);
            console.log(data.wind.speed);
        }
    })
})

