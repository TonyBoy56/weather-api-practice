import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
// import { WeatherService } from "./weather-service";

$(document).ready(function () {
  $("#hidden").hover(function () {
    $(this).css("color", "black");
  },
  );
});
// function getWeatherByCity(city) {
//   ///////////////////////////////////////////utilizing XMLHttpRequest method////////////////////////////////////////

//   let request = new XMLHttpRequest();
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

//   request.addEventListener("loadend", function () {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       printElements(response, city);
//     } else {
//       printError(this, response, city)
//     }
//   });

//   request.open("GET", url, true);
//   request.send();
// }

// function printElements(apiResponse, city) {
//   document.querySelector(
//     ".showHumidity"
//   ).innerText = `The humidity in ${city} is ${apiResponse.main.humidity}%.`;
//   document.querySelector(
//     ".showTemp"
//   ).innerText = `The temperature in Kelvins ${city} is ${apiResponse.main.temp} degrees`;
// }

// function printError(request, apiResponse, city) {
//   document.querySelector('#showResponse').text = `There was an error in handling your request for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
// }

// function handleFormSubmission() {
//   event.preventDefault();
//   const city = document.querySelector('#location').value;
//   document.querySelector('#location').value = null;
//   getWeatherByCity(city);
// }

// window.addEventListener("load", function() {
//   document.querySelector('form').addEventListener("submit", handleFormSubmission);
// });

/////////////////////////////////////////utilizing Fetch API method/////////////////////////////////////////////

// $(document).ready(function () {
//   event.preventDefault();
//   $("#weatherLocation").click(function () {
//     getWeatherByCity(city);
//     const city = $("#location").val();
//     $('#location').val("");

//     (async () => {
//       const response = await getWeatherByCity(city);
//       getElements(response);
//     })();

//     function getElements(response) {
//       return response;
//       // $(".showHumdidity").innerText = `The humidity in ${city} is ${response.main.humidity}%.`;
//       // $(".showTemp").innerText = `The temperature in Kelvin in ${city} is ${response.main.temp} degrees.`;
//     }
//   });
// });

///////////////////////////////////////////utilizing jQuery AJAX method/////////////////////////////////////////////

// $(document).ready(function () {
//   $("#weatherLocation").click(function () {
//     const city = $("#location").val("");
//     $.ajax({
//       type: "GET",
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`,
//       dataType: "json",
//       success: getElements(),
//       error: error(),
//     });

//     function getElements(response) {
//       $(".showHumdidity").text(
//         `The humidity in ${city} is ${response.main.humidity}%.`
//       );
//       $(".showTemp").text(
//         `The temperature in ${city} is ${response.main.temp} degrees.`
//       );
//     }

//     function error(xhr, status, error) {
//       alert(
//         "Result: " +
//           status +
//           " " +
//           error +
//           " " +
//           xhr.status +
//           " " +
//           xhr.statusText
//       );
//     }
//   });
// });
