#!/usr/bin/node
const request = require('request');
const fs = require('fs');
// Get the URL from the first argument
const url = process.argv[2];
// Get the file path from the second argument
const filePath = process.argv[3];
// Make a request to the URL
request(url, function (error, response, body) {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }
  // Save the response body to a file
  fs.writeFile(filePath, body, 'utf-8', function (error) {
    // Check for errors
    if (error) {
      console.error(error);
      return;
    }
    // Log a success message
    console.log('The file was saved successfully.');
  });
});
