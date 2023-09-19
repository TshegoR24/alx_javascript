#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const iconv = require('iconv-lite'); // For UTF-8 encoding

// Check if the required arguments are provided
if (process.argv.length !== 4) {
  console.log('Usage: node fetchAndSave.js <URL> <file-path>');
  process.exit(1);
}

// Extract URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make an HTTP GET request to the URL
request({ url, encoding: null }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('HTTP Error:', response.statusCode);
  } else {
    // Convert the response body to UTF-8 encoding
    const utf8Body = iconv.decode(body, 'utf-8');

    // Save the response body to the specified file
    fs.writeFileSync(filePath, utf8Body, 'utf-8');
    console.log(`Contents of ${url} saved to ${filePath}`);
  }
});
