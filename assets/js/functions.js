$(document).ready(function () {

  $.getJSON("https://ipapi.co/json", function(data) {


    var d = new Date();
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[d.getMonth()+1];
    var day = d.getDate();
    var year = d.getFullYear();
    $("#date").text(day+" "+month+" "+year);

    //console.log("Today is ",day,month,year);
    var lat = data.latitude;
    var lon = data.longitude;
    var city = data.city;
    var country = data.country_name;
    //console.log(city,",",country);
    $(".city").text(city+" , "+country);
    var link = "https://api.darksky.net/forecast/142c5de8355ba633fe6f4ee1530d6c27/"+lat+","+lon;
    console.log(link);

    $.getJSON(link, function(dataOp) {

      var tempF = Math.round(dataOp.currently.temperature);

      var tempC = Math.round((tempF - 32) * (5/9)) ;

      console.log("Temperature C :",tempC);
      console.log("Temperature F :",tempF);

      $(".degree-f").text(tempF);
      $(".degree-c").text(tempC);

      $(".tgl-btn").click(function () {
        if ($(".degree-c").css("left") === "0px")
        {
          $(".degree-f").animate({left: "0"}, 150);
          $(".degree-c").animate({left: "-100%"}, 150);
        }
        else {
          $(".degree-f").animate({left: "100%"}, 150);
          $(".degree-c").animate({left: "0"}, 150);
        }

      });

      var windS = dataOp.wind.speed;
      $(".wind > p").text(windS);
      //console.log("Wind Speed :",windS);
      var humidity = dataOp.main.humidity;
      $(".humidity > p").text(humidity);
      //console.log("Humidity :",humidity);
      var weatherDescr = dataOp.weather[0].description;
      $(".w-left > p:last-child").text(weatherDescr);
      //console.log("Weather Description :",weatherDescr);
      var weather = dataOp.weather[0].main;
      $(".w-left > p:nth-child(2)").text(weather);
      //console.log("Weather Status :",weather);
      var weatherIcon = dataOp.weather[0].icon;

      switch (weatherIcon) {
        case "01n":
        case "01d":
          $(".w-icon").css("background-image","url('./assets/img/sun.svg')");
          break;
        case "02n":
        case "02d":
          $(".w-icon").css("background-image","url('./assets/img/sun-cloud.svg')");
          break;
        case "03n":
        case "03d":
          $(".w-icon").css("background-image","url('./assets/img/s-clouds.svg')");
          break;
        case "04n":
        case "04d":
          $(".w-icon").css("background-image","url('./assets/img/s-clouds.svg')");
          break;
        case "09n":
        case "09d":
          $(".w-icon").css("background-image","url('./assets/img/rain.svg')");
          break;
        case "10n":
        case "10d":
          $(".w-icon").css("background-image","url('./assets/img/rain.sv')g");
          break;
        case "11n":
        case "11d":
          $(".w-icon").css("background-image","url('./assets/img/thunder.svg')");
          break;
        case "13n":
        case "13d":
          $(".w-icon").css("background-image","url('./assets/img/snow.svg')");
          break;
        case "50n":
        case "50d":
          $(".w-icon").css("background-image","url('./assets/img/mist.svg')");
          break;
      }


      //console.log("Icon ID :",weatherIcon);




    });
  });

});
