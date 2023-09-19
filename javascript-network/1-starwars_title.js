#!/usr/bin/node
const request = require('request');
const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error('Usage: node getStarWarsMovieTitle.js <episode_id>');
    process.exit(1);
}

const episodeId = args[0];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeId}`;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }

    if (response.statusCode === 200) {
        const movieData = JSON.parse(body);
        const movieTitle = movieData.title;
        console.log(`The title of Episode ${episodeId} is: ${movieTitle}`);
    } else {
        console.error(`Error: Unable to retrieve movie information for Episode ${episodeId}`);
        process.exit(1);
    }
});
