#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Function to fetch data from the API
function fetchData(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

// Function to count completed tasks by user ID
function countCompletedTasks(data) {
  const completedTasksByUser = {};

  for (const task of data) {
    if (task.completed) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId]++;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  }

  return completedTasksByUser;
}

// Main function to fetch data and count completed tasks
async function main() {
  try {
    const data = await fetchData(apiUrl);
    const completedTasksByUser = countCompletedTasks(data);

    // Print users with completed tasks
    for (const userId in completedTasksByUser) {
      console.log(`User ID ${userId}: ${completedTasksByUser[userId]} completed tasks`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Run the main function
main();
