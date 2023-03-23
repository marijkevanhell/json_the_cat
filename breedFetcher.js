const request = require("request");

//for dynamic breed
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  //request failed
  if (error) {
    return console.log("Request failed: ", error);
  }
  //converts string to object
  const data = JSON.parse(body);

  const breed = data[0];
  //breed not found
  if (data.length === 0) {
    console.log(`Failed to find breed ${breed}`);
  } else {
    //breed found
    console.log(breed.description);
  }
});

