$(document).ready(function() {


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (data) {

      var lat = data.coords.latitude;
      var lon = data.coords.longitude;

      var link = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6e0ce2c9a22ee0e61b0e018e28b815b6/" + lat + "," + lon;
    
      $.ajax({
          url: link,
          // headers: {'X-Requested-With': 'XMLHttpRequest'},
          // dataType: "jsonp",
          success: function(dataOp) {

            var city = dataOp.timezone;
            // var country = data.country_name;
            $(".city").text(city);

            console.log(dataOp)
    
            var tempF = Math.round(dataOp.currently.temperature);
            var tempC = Math.round((tempF - 32) * (5 / 9));
    
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
            var humidity = dataOp.currently.humidity;
            $(".humidity > p").text(humidity);
            var weatherDescr = dataOp.hourly.summary;
            $(".w-left > p:last-child").text(weatherDescr);
            var weather = dataOp.currently.summary;
            $(".w-left > p:nth-child(2)").text(weather);
    
            var weatherIcon = dataOp.currently.icon;
    
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
          }
      });

    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

  // get today's date
  var d = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[d.getMonth()];
  var day = d.getDate();
  var year = d.getFullYear();
  $("#date").text(day + " " + month + " " + year);

});
