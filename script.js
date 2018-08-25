let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]



let arrayy = ["imgs/giphy.gif","imgs/l.gif", "imgs/source.gif","imgs/e.jpg"];
function style() {
	let randomly = parseInt(Math.random()*4);
	document.querySelector(".main-center-div").style["background-image"] = `url(${arrayy[randomly]})`;
	showTime();
}
setInterval(style,4000);

function search() {
	let userVal = document.querySelector(".input").value;
	if (userVal === ""){
		alert ("Search Bar Is Empty");
	} else {
	document.querySelector(".city-name").innerHTML = userVal;
	// document.querySelector(".input").value = "";
	}
	let city = document.querySelector(".city-name").innerHTML;
	let wheather = new XMLHttpRequest();
	let apiKey = "41d496f5b3f1a854e6e79910b71ba93f";
	wheather.open("GET", "https://api.openweathermap.org/data/2.5/weather?q= "+ city +" &units=imperial"+ "&appid=" + apiKey, false)
	wheather.send(null);
	let r = JSON.parse(wheather.response);
	console.log(r)
	if (city !== "") {
	let temp = r.main.temp;	
	let visibility = r.visibility;	
	let wind = r.wind.speed;	
	let tempInCelcius = (Math.round(Math.round(temp - 32)/1.8));
	let pressure = r.main.pressure;
	let humidity = r.main.humidity;
	let des = r.weather[0].description;
	let deg = "&deg;";
	document.querySelector(".centr-tem").innerHTML = tempInCelcius +" C"+ deg;
	document.querySelector("#pressure").innerHTML = "PRESSURE: "+ pressure +" %";
	document.querySelector("#visibility").innerHTML = "VISIBILITY: "+ visibility +" Km";
	document.querySelector("#low").innerHTML = "WIND SPEED: "+ wind ;
	document.querySelector("#humi").innerHTML = "HUMIDITY: " +humidity ;
	document.querySelector("#des").innerHTML = "DESCRIPTION: " +des ;
	}else{
		alert("Please Enter City Name")
	}

	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/forecast?q=" +city+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
		success: function(data){
		console.log(data);
		let d1 = new Date(data.list[0].dt*1000);
		let d2 = new Date(data.list[8].dt*1000);
		let d3 = new Date(data.list[16].dt*1000);
		let d4 = new Date(data.list[24].dt*1000);
		let d5 = new Date(data.list[32].dt*1000);



		document.querySelector(".mon").innerHTML = days[d1.getDay()];
		document.querySelector(".tues").innerHTML = days[d2.getDay()];
		document.querySelector(".wed").innerHTML = days[d3.getDay()];
		document.querySelector(".thus").innerHTML = days[d4.getDay()];
		document.querySelector(".fri").innerHTML = days[d5.getDay()];
	

		document.querySelector(".pre-temp-mon").innerHTML = Math.round(data.list[0].main.temp)  + "/" + Math.round(data.list[2].main.temp)  ;
		document.querySelector(".pre-temp-tues").innerHTML = Math.round(data.list[5].main.temp)  + "/" + Math.round(data.list[6].main.temp)  ;
		document.querySelector(".pre-temp-wed").innerHTML = Math.round(data.list[13].main.temp)  + "/" + Math.round(data.list[14].main.temp)  ;
		document.querySelector(".pre-temp-thus").innerHTML = Math.round(data.list[21].main.temp)  + "/" + Math.round(data.list[22].main.temp)  ;
		document.querySelector(".pre-temp-fri").innerHTML = Math.round(data.list[29].main.temp)  + "/" + Math.round(data.list[32].main.temp)  ;
			
		document.querySelector(".pre-wind-mon").innerHTML = data.list[0].wind.speed;
		document.querySelector(".pre-wind-tue").innerHTML = data.list[8].wind.speed;
		document.querySelector(".pre-wind-wed").innerHTML = data.list[16].wind.speed;
		document.querySelector(".pre-wind-thus").innerHTML = data.list[24].wind.speed;
		document.querySelector(".pre-wind-fri").innerHTML = data.list[32].wind.speed;
	
		document.querySelector(".pre-cloud-mon").innerHTML = data.list[0].weather[0].description;
		document.querySelector(".pre-cloud-tue").innerHTML = data.list[8].weather[0].description;
		document.querySelector(".pre-cloud-wed").innerHTML = data.list[16].weather[0].description;
		document.querySelector(".pre-cloud-thus").innerHTML = data.list[24].weather[0].description;
		document.querySelector(".pre-cloud-fri").innerHTML = data.list[32].weather[0].description;
	}
	});
}
function mySubmitFunction()
{
  return false;
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}













// 