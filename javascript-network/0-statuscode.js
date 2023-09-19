#!/usr/bin/node
// Import the 'request' module
const request = require('request');

// Check if a URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node getStatusCode.js <URL>');
  process.exit(1);
}

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request
request(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  // Display the status code
  console.log(`code: ${response.statusCode}`);
});
