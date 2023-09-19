#!/usr/bin/node
const request = require('request');

// API URL
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

// Character ID for Wedge Antilles
const wedgeAntillesId = 18;

// Function to count appearances of Wedge Antilles
function countWedgeAntillesMovies(films) {
  let count = 0;

  // Iterate through the films
  films.forEach((film) => {
    // Check if Wedge Antilles is present in the characters list
    if (film.characters.includes(wedgeAntillesId)) {
      count++;
    }
  });

  return count;
}

// Make a request to the API
request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Parse the JSON response
    const films = JSON.parse(body);

    // Count the number of movies where Wedge Antilles is present
    const numberOfMovies = countWedgeAntillesMovies(films.results);

    console.log(`Number of movies where Wedge Antilles is present: ${numberOfMovies}`);
  } else {
    console.error('Error:', error);
  }
});
