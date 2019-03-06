//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const request = require("request");

/**
 * @returns {temp,msg}
 * @param {latitude, longitude, callback}
 */

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/a3a3eac404d8ba7fb32ffb3c826071e9/${latitude},${longitude}?units=si&lang=es`
  request(
    {
      url: url,
      json: true
    },
    (error, response) => {
        if(error){//low level os error.
            callback('Error:: Unable to find weather service!.', undefined);
        }else if(response.body.error) {//search error.
            callback(response.body.error, undefined);
        }else {//got some response.
            const temp = response.body.currently.temperature;
            const precipProbability = response.body.currently.precipProbability;
            callback(undefined,{temp, precipProbability});
        }
    }
  );
};

module.exports = forecast;
