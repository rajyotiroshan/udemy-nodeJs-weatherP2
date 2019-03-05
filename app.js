const request = require("request");

//const url =
  //"https://api.darksky.net/forecast/a3a3eac404d8ba7fb32ffb3c826071e9/37.8267,-122.4233?units=si&lang=es";

const urlMapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/delhicd.json?access_token=pk.eyJ1IjoicXJhamFuIiwiYSI6ImNqb2xwMzJpdjBnMjEza214dmw1aGs4d24ifQ.JeBKCBGxljAn1DYq_3VzgQ&limit=1";
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

//Geocoding
//Address 

/* request({
    url: urlMapBox,
    json: true
}, (error, response)=>{
   
    if(error) {
      console.log("Unable to connect to server.")
    }else if(response.body.features.length === 0 ) {
      console.log("Error not found ::Couldnot find the search term.!");
    }else {
      const lat = response.body.features[0].center[0];
      const long = response.body.features[0].center[1];
      console.log(lat+","+long);
    }
}); */

const geoCode = (address, callback)=>{
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicXJhamFuIiwiYSI6ImNqb2xwMzJpdjBnMjEza214dmw1aGs4d24ifQ.JeBKCBGxljAn1DYq_3VzgQ&limit=1`;
  request({
    url: url,
    json: true
  },(error,response)=>{
    if(error) {
      callback('Unable to connect to location services',undefined);
    }else if(response.body.features.length === 0) {
      callback(' Unable to find location.Try another search.',undefined);
    }else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
}

geoCode("burari new delhi", (error, data)=> {
  console.log("Error",error);
  console.log('Date', data);
});


