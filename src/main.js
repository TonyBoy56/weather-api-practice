import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

/////////////////////////////////////////utilizing jQuery AJAX method/////////////////////////////////////////////

$(document).ready(function () {
  // perform an ajax request on click-event of a button with id #weatherLocation
  $("#weatherLocation").click(function () {
    event.preventDefault();
    const city = $("#location").val();
    // the ajax request. call 'returnSuccess' if status == 200; call returnError if status == 400
    $.ajax({
      type: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`,
      dataType: "json",
      success: function (result) {
        returnSuccess(result, city);
      },
      error: function (xhr, status, error) {
        returnError(xhr, status, error);
      }
    });
  });
});

const returnSuccess = (result, city) => {
  $(".showHumidity").text(
    `The humidity in ${city} is ${result.main.humidity}%.`
  );
  $(".showTemp").text(
    `The temperature in, in Kelvins, within ${city} is ${result.main.temp} degrees.`
  );
};

const returnError = (xhr, status, error) => {
  $("#showResponse").text(
    `Result: ${status} ${error} ${xhr.status}`
  );
};

///////////////////////////////// Exemplify  an understanding of utilizing XMLHttpRequest method \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function getWeatherByCity(city) {

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
