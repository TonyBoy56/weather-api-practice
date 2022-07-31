// UI LOGIC //
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { WeatherService } from "./../src/weather-service.js";

// jQuery DOM logic against weather-service API request

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    const city = $("#location").val("");

    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      $(".showHumdidity").text(
        `The humidity in ${city} is ${response.main.humidity}%.`
      );
      $(".showTemp").text(
        `The temperature in ${city} is ${response.main.temp} degrees.`);
    }
  });
});

// jQuery AJAX API request and DOM logic