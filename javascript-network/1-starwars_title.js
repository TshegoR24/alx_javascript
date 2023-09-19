#!/usr/bin/node
const request = require('request');
// Get the movie ID from the first argument
const movieId = parseInt(process.argv[2]);
// Make a request to the Star Wars API
request(`https://swapi-api.alx-tools.com/api/films/${movieId}`, function (error, response, body) {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }
  // Parse the response body as JSON
  const movie = JSON.parse(body);
  // Print the movie title
  console.log(movie.title);
});
