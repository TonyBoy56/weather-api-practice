export class WeatherService {
  
  getWeatherByCity() {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;

      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          // this function will soon be written
          printElements(response, city);
        }
      });

      // call upon the request object to pass a http req. method of "GET", our api URL, and an async bool of 'true'
      request.open("GET", url, true);
      request.send();
  }
}