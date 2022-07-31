export class WeatherService {
  
  getWeatherByCity() {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;

      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        
      })
  }
}