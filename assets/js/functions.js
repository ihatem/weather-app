$(document).ready(function() {

  $.getJSON("https://ipapi.co/json", function(data) {

    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[d.getMonth() + 1];
    var day = d.getDate();
    var year = d.getFullYear();
    $("#date").text(day + " " + month + " " + year);

    //console.log("Today is ",day,month,year);
    var lat = data.latitude;
    var lon = data.longitude;
    var city = data.city;
    var country = data.country_name;
    //console.log(city,",",country);
    $(".city").text(city + " , " + country);
    var link = "https://api.darksky.net/forecast/142c5de8355ba633fe6f4ee1530d6c27/" + lat + "," + lon;
    //console.log(link);

    $.ajax({
        url: link,
        dataType: "jsonp",
        success: function(dataOp) {
          console.log('Hello Curious Developper :)');

          var tempF = Math.round(dataOp.currently.temperature);

          var tempC = Math.round((tempF - 32) * (5 / 9));

          //console.log("Temperature C :", tempC);
          //console.log("Temperature F :", tempF);

          $(".degree-f").text(tempF);
          $(".degree-c").text(tempC);

          $(".tgl-btn").click(function() {
            if ($(".degree-c").css("left") === "0px") {
              $(".degree-f").animate({
                left: "0"
              }, 150);
              $(".degree-c").animate({
                left: "-100%"
              }, 150);
            } else {
              $(".degree-f").animate({
                left: "100%"
              }, 150);
              $(".degree-c").animate({
                left: "0"
              }, 150);
            }

          });

          var windS = dataOp.currently.windSpeed;
          $(".wind > p").text(windS);
          //console.log("Wind Speed :",windS);
          var humidity = dataOp.currently.humidity;
          $(".humidity > p").text(humidity);
          //console.log("Humidity :",humidity);
          var weatherDescr = dataOp.hourly.summary;
          $(".w-left > p:last-child").text(weatherDescr);
          //console.log("Weather Description :",weatherDescr);
          var weather = dataOp.currently.summary;
          $(".w-left > p:nth-child(2)").text(weather);
          //console.log("Weather Status :",weather);

          var weatherIcon = dataOp.currently.icon;
          //console.log(weatherIcon);
          switch (weatherIcon) {

            case "clear-day":
              skycons.add("icon1", Skycons.CLEAR_DAY);
              break;

            case "clear-night":
              skycons.add("icon1", Skycons.CLEAR_NIGHT);
              break;

            case "rain":
              skycons.add("icon1", Skycons.RAIN);
              break;

            case "snow":
              skycons.add("icon1", Skycons.SNOW);
              break;

            case "sleet":
              skycons.add("icon1", Skycons.SLEET);
              break;

            case "wind":
              skycons.add("icon1", Skycons.WIND);
              break;

            case "fog":
              skycons.add("icon1", Skycons.FOG);
              break;

            case "cloudy":
              skycons.add("icon1", Skycons.CLOUDY);
              break;

            case "partly-cloudy-day":
              skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
              break;

            case "partly-cloudy-night":
              skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
              break;
          }


          //console.log("Icon ID :",weatherIcon);
        }



    });

  });

});
