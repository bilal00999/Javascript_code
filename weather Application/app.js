let w_city = document.querySelector(".weather_city");
let w_date = document.querySelector(".weather_date");
let w_condition = document.querySelector(".weather_condition");
let w_icon = document.querySelector(".weather_icon");
let w_temp = document.querySelector(".weather_temperature");
let w_min = document.querySelector(".min");
let w_max = document.querySelector(".max");
let w_1_getdata = document.querySelector(".w_1_getdata");
let w_2_getdata = document.querySelector(".w_2_getdata");
let w_3_getdata = document.querySelector(".w_3_getdata");
let w_4_getdata = document.querySelector(".w_4_getdata");
let input = document.querySelector(".search_weather");
// let w_date = document.querySelector(".weather_date");

// let api = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=6896d49b624a2af0aadeb6b44665e573`;
let city = "karachi";
input.addEventListener("submit", (event) => {
  event.preventDefault();

  let cityName = document.querySelector(".city_name");
  city = cityName.value;
  getWeather();
  cityName.value = "";

  //   event.target.value
});
const getWeather = async () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6896d49b624a2af0aadeb6b44665e573`;
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    // console.log(data);

    let { dt, main, sys, wind } = data;
    countryname = new Intl.DisplayNames(["en"], { type: "region" }).of(
      sys.country
    );
    w_city.innerHTML = `${data.name}, ${countryname}`;
    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" />`;
    w_condition.innerHTML = data.weather[0].main;
    const date = new Date(dt * 1000);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const newDate = new Intl.DateTimeFormat("en-US", options).format(date);
    w_date.innerHTML = newDate;

    w_temp.innerHTML = `${main.temp.toFixed()}&#176`;
    w_min.innerHTML = `Min : ${main.temp_min}&#176`;
    w_max.innerHTML = `Max : ${main.temp_max}&#176`;

    w_1_getdata.innerHTML = `${main.feels_like.toFixed()}&#176`;
    w_2_getdata.innerHTML = `${main.humidity}&#176`;
    w_3_getdata.innerHTML = `${wind.deg}&#176`;
    w_4_getdata.innerHTML = `${main.pressure}&#176`;
  } catch (e) {
    console.log(e);
  }
};

document.body.addEventListener("load", getWeather());
