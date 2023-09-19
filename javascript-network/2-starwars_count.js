#!/usr/bin/node
const request = require('request');
// Get the API URL from the first argument
const apiUrl = process.argv[2];
// Make a request to the Star Wars API
request(apiUrl, function (error, response, body) {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }
  // Parse the response body as JSON
  const movies = JSON.parse(body);
  // Filter the movies by the character ID
  const wedgeAntillesMovies = movies.filter(movie => movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'));
  // Print the number of movies
  console.log(wedgeAntillesMovies.length);
});
