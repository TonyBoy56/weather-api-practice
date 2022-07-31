export class WeatherService {
  async getWeatherByCity(city) {
    // Utilizing 'traditional XMLHttpRequest()'

    // let request = new XMLHttpRequest();
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;

    // request.addEventListener("loadend", function() {
    //   const response = JSON.parse(this.responseText);
    //   if (this.status === 200) {
    //     // this function will soon be written
    //     printElements(response, city);
    //   }
    // });

    // request.open("GET", url, true);
    // request.send();

    // utilizing Fetch API
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
      );
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      console.error("There was an issue in handling your requests: " + error.message);
    }
  }
}
