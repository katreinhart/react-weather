var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=a40031febeb51ab1879dbc4af516105b';

// a40031febeb51ab1879dbc4af516105b
// api.openweathermap.org/data/2.5/weather?q={city name}
//

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error("Unable to find weather for that location.");
    });
  }
}
