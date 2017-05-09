$(document).ready(function () {

  $.getJSON("https://ip-api.com/json", function(data) {


    var d = new Date();
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[d.getMonth()+1];
    var day = d.getDate();
    var year = d.getFullYear();
    $("#date").text(day+" "+month+" "+year);

    //console.log("Today is ",day,month,year);
    console.log("hello world");
    var lat = data.lat;
    var lon = data.lon;
    var city = data.city;
    var country = data.country;
    //console.log(city,",",country);
    $(".city").text(city+" , "+country);
    var link =
    "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=5293bf9894aa99fdc0437f9259e142f7";

    $.getJSON(link, function(dataOp) {

      var tempK = dataOp.main.temp;

      var tempC = Math.round(tempK - 273.15);

      //console.log("Temperature C :",tempC);
      var tempF = Math.round(tempK*(9/5)-459.67);
      //console.log("Temperature F :",tempF);

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
