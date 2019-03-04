const request = require("request");

const url =
  "https://api.darksky.net/forecast/a3a3eac404d8ba7fb32ffb3c826071e9/37.8267,-122.4233?units=si&lang=es";

request(
  {
    url: url,
    json: true
  },
  (error, response) => {
      const temp = response.body.currently.temperature;
      const precipProbability = response.body.currently.precipProbability;
      console.log(`${response.body.daily.data[0].summary}.It is currently ${temp} degrees out. There is a ${precipProbability}% chance of rain.`)
  }
);

