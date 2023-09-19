#!/usr/bin/node
const request = require('request');
// Get the API URL from the first argument
const apiUrl = process.argv[2];
// Make a request to the API
request(apiUrl, function (error, response, body) {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }
  // Parse the response body as JSON
  const todos = JSON.parse(body);
  // Get the user IDs of the completed tasks
  const completedTaskUserIds = todos
    .filter(todo => todo.completed)
    .map(todo => todo.userId);
  // Count the number of tasks completed by each user
  const taskCountsByUserId = completedTaskUserIds.reduce((counts, userId) => {
    counts[userId] = (counts[userId] || 0) + 1;
    return counts;
  }, {});
  // Print the users with completed tasks
  for (const userId in taskCountsByUserId) {
    console.log(`${userId}: ${taskCountsByUserId[userId]}`);
  }
});
