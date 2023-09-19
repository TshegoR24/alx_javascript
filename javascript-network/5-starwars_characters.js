#!/usr/bin/node
const request = require('request');

// Check if the movie ID is provided as an argument
if (process.argv.length < 3) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

// Movie ID from command line argument
const movieId = process.argv[2];

// Make a request to the Star Wars API to fetch movie details
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;
request(apiUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error('Error fetching movie details:', error || `Status Code ${response.statusCode}`);
    process.exit(1);
  }

  // Parse the JSON response
  const movieData = JSON.parse(body);

  console.log(`Characters in ${movieData.title}:`);
  console.log('-----------------------------');

  // Iterate through the characters and print their names
  movieData.characters.forEach((characterUrl) => {
    request(characterUrl, (charError, charResponse, charBody) => {
      if (charError || charResponse.statusCode !== 200) {
        console.error('Error fetching character details:', charError || `Status Code ${charResponse.statusCode}`);
        return;
      }

      const characterData = JSON.parse(charBody);
      console.log(characterData.name);
    });
  });
});
