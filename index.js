var city = document.querySelector(".search-bar").value.toLowerCase();
let weather = {
    "apiKey" : "a665098cb9d57501cf18750b913f5606",
    fetchWeather : function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
    .then((Response) => Response.json()) 
    .then((data) => this.displayWeather(data));
   },
   displayWeather: function(data)
{
   const {name} = data; 
   const {description} = data.weather[0];
   const {temp, humidity} = data.main;
   const {speed} = data.wind;
   const {feels_like} = data.main;
   document.querySelector(".city").innerText = "Weather in " + name;
   document.querySelector(".description").innerText = description;
   document.querySelector(".feels").innerText = "Feels Like: " + feels_like + "°C";
   document.querySelector(".temp").innerText = "Current Temperature: " + temp + "°C";
   document.querySelector(".precipitation").innerText =
   "Humidity: " + humidity + "%";
 document.querySelector(".wind").innerText =
   "Wind speed: " + speed + " km/h";
 document.querySelector(".weather").classList.remove("loading");
//  document.body.style.backgroundImage =
//    "url('https://source.unsplash.com/1600x900/?" + name + "')";
},
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".btn").onclick = function (event) {
      weather.search();
    }
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});
weather.fetchWeather("Delhi");
