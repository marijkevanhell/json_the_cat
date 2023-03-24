const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
  //request failed
    if (error) {
      callback(`Failed: ${error}`, null);
    }
    //converts string to object
    const data = JSON.parse(body);

    const breedData = data[0];
    //breed not found
    if (data.length === 0) {
      callback(`Failed to find breed: ${breedName}`, null);
    } else {
      //breed found
      callback(null, breedData.description);
    }
  });
};

module.exports = { fetchBreedDescription };
