// Get a reference to the form and error message element
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

// Regular expression pattern to validate email format
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Function to validate the email format
function validateEmail() {
    const email = emailInput.value.trim();
    
    if (!emailPattern.test(email)) {
        // Email format is incorrect
        errorElement.textContent = "Please enter a valid email address.";
        errorElement.style.display = "block";
        return false; // Prevent form submission
    } else {
        // Email format is correct
        errorElement.textContent = ""; // Clear the error message
        errorElement.style.display = "none";
        return true; // Allow form submission
    }
}

// Attach an event listener to the form's submit event
emailForm.addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission
    }
});
