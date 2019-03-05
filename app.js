const geoCode = require("./utils/geocode");

//const url =
  //"https://api.darksky.net/forecast/a3a3eac404d8ba7fb32ffb3c826071e9/37.8267,-122.4233?units=si&lang=es";
/* request(
  {
    url: url,
    json: true
  },
  (error, response) => {
    if(error){//low level os error. like networl connections.
      console.log("Unable to connect to weather service!.");
    }else if(response.body.error) {//error like wrong location.
      console.log("Unable to find")
    }else {
      const temp = response.body.currently.temperature;
       const precipProbability = response.body.currently.precipProbability;
      console.log(`${response.body.daily.data[0].summary}.It is currently ${temp} degrees out. There is a ${precipProbability}% chance of rain.`)
    }
    
 
  }
); */


geoCode("kandiwali", (error, data)=> {
  console.log("Error",error);
  console.log('Date', data);
});




