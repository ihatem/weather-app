$(document).ready(function(){$.getJSON("https://ipapi.co/json",function(e){var a=new Date,s=["January","February","March","April","May","June","July","August","September","October","November","December"],t=s[a.getMonth()+1],c=a.getDate(),r=a.getFullYear();$("#date").text(c+" "+t+" "+r);var n=e.latitude,i=e.longitude,g=e.city,o=e.country_name;$(".city").text(g+" , "+o);var d="https://api.darksky.net/forecast/142c5de8355ba633fe6f4ee1530d6c27/"+n+","+i;console.log(d),$.getJSON(d,function(e){var a=Math.round(e.currently.temperature),s=Math.round((a-32)*(5/9));console.log("Temperature C :",s),console.log("Temperature F :",a),$(".degree-f").text(a),$(".degree-c").text(s),$(".tgl-btn").click(function(){"0px"===$(".degree-c").css("left")?($(".degree-f").animate({left:"0"},150),$(".degree-c").animate({left:"-100%"},150)):($(".degree-f").animate({left:"100%"},150),$(".degree-c").animate({left:"0"},150))});var t=e.wind.speed;$(".wind > p").text(t);var c=e.main.humidity;$(".humidity > p").text(c);var r=e.weather[0].description;$(".w-left > p:last-child").text(r);var n=e.weather[0].main;$(".w-left > p:nth-child(2)").text(n);var i=e.weather[0].icon;switch(i){case"01n":case"01d":$(".w-icon").css("background-image","url('./assets/img/sun.svg')");break;case"02n":case"02d":$(".w-icon").css("background-image","url('./assets/img/sun-cloud.svg')");break;case"03n":case"03d":$(".w-icon").css("background-image","url('./assets/img/s-clouds.svg')");break;case"04n":case"04d":$(".w-icon").css("background-image","url('./assets/img/s-clouds.svg')");break;case"09n":case"09d":$(".w-icon").css("background-image","url('./assets/img/rain.svg')");break;case"10n":case"10d":$(".w-icon").css("background-image","url('./assets/img/rain.sv')g");break;case"11n":case"11d":$(".w-icon").css("background-image","url('./assets/img/thunder.svg')");break;case"13n":case"13d":$(".w-icon").css("background-image","url('./assets/img/snow.svg')");break;case"50n":case"50d":$(".w-icon").css("background-image","url('./assets/img/mist.svg')")}})})});