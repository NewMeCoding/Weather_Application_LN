function showCurrentDate() {
let now = new Date();
let date = now.getDate();
let dateUnderTen = `0${date}`;
if (date < 10) {
  date = dateUnderTen;
} else {
  date = now.getDate();
}
let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
underTenMinutes = `0${minutes}`;
if (minutes < 10) {
  minutes = underTenMinutes;
} else {
  minutes = now.getMinutes();
}
let currentDate = document.querySelector("h4");
currentDate.innerHTML = `${date}/${month}/${year} ${hours}:${minutes}`;
}
showCurrentDate();

function showCity(event) {
  event.preventDefault();
 let searchInput = document.querySelector("#city-input");
 let h1 = document.querySelector("h1");
 h1.innerHTML = `${searchInput.value}`;

 searchCity(searchInput.value);
}

function searchCity(city) { 
  let apiKey = "d2991882ca3e5ee6762070360098f550";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-city-form");
form.addEventListener("submit", showCity);


function showTemperature (response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = `${currentTemperature}`;
   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
 console.log(`${currentTemperature}`);
}


