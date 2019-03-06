const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//take input from user through command line argument
location = process.argv[2];

if (!location) {
  console.log("Please provide a location as third argument.");
  return;
} else {
  geoCode(location, (error, data) => {
    if (error) {
      return console.log("error");
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
