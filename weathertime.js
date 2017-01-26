var clock = $("#clock");

if ("geolocation" in navigator) {
  	navigator.geolocation.getCurrentPosition(success, error);
	function success(position) {
    	var latitude = position.coords.latitude;
    	var longitude = position.coords.longitude;
    	// console.log(latitude, longitude);

    	var key = "7b6f1a3870804529c315991e674b85e3";
    	var unit = "imperial";
    	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=" + unit +"&appid=" + key;

    	// WEATHER
    	$.getJSON(url, function(data){
    	   var weatherid = data.weather[0].id;
    		//Clear Sky
    			if (weatherid == 800) {
    				document.getElementById("window").innerHTML = "<img src='imgs/window/clearsky.png'>";
    			}

    		//Clouds
    			else if (weatherid > 800 && weatherid < 900) {
    				document.getElementById("window").innerHTML = "<img src='imgs/window/clouds.png'>";
    			}

    		// Drizzle
    			else if (weatherid >= 300 && weatherid < 400) {
    				document.getElementById("window").innerHTML = "<img src='imgs/window/drizzle.png'>";
    			}

    		// Rain
    			else if (weatherid >= 500 && weatherid < 600) {
    				document.getElementById("window").innerHTML = "<img src='imgs/window/rain.png'>";
    			}

    		// Thunderstorm
    			else if (weatherid >= 200 && weatherid < 300) {
    				document.getElementById("window").innerHTML = "<img src='imgs/window/thunderstorm.png'>";
    			}

    		// Snow
    			else if (weatherid >= 600 && weatherid < 700) {
    				document.getElementById("window").innerHTML = "<img src='imgs/window/snow.ico'>";
    			}

    		// Atmosphere
    			else if (weatherid >= 700 && weatherid < 800) {
    				document.getElementById("window").innerHTML = "<img src='imgs/window/mist.png'>";
    			}


        // Temperature ------------------ START
          var tempid = data.main.temp;
        	// document.getElementById("window").addEventListener("click", function() {
          //   alert("The current temperature is " + tempid);
          //
          // });

          $("#window").click(function(event){
            alert("The current temperature is " + tempid + "° Farenheit.");
          })
        // Temperature ------------------ END

		})




// Clock ------ START
	var tzdbkey = "55SAA6VN8UUC";
	var tzdburl = "http://api.timezonedb.com/v2/get-time-zone?key=" + tzdbkey + "&format=json&by=position&lat=" + latitude + "&lng=" + longitude;
	$.getJSON(tzdburl, function(localtime){
		var fullTime = localtime.formatted.substring(11);

		var hour = fullTime.substring(0, 2);
		var AMPM;
		if (hour < 12){
			AMPM = "AM";
		} else {
			AMPM = "PM";
			}

		if (hour > 12) {
			hour -= 12;
		} else if (hour <= 9 && hour >= 1){
			hour = hour.substring(1,2);
		}

		var min = fullTime.slice(3, 5);
		var sec = fullTime.slice(-2);

	clock.click(function(event){
		alert("The current time is " + hour + ":" + min + ":" + sec + " " + AMPM);
	});
// Clock ------ END

	})
}


function error() {
    $("#content").innerHTML = "Look outside!";
}
}
