// Get a reference to the form element
const form = document.getElementById('myForm');

// Function to handle form submission
function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Reset previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Perform validation
    let isValid = true;

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Please fill in the name field';
        isValid = false;
    }

    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Please fill in the email field';
        isValid = false;
    }

    // If all validations pass, display success message
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form programmatically here if needed:
        // form.submit();
    }
}

// Add an event listener to the form for the submit event
form.addEventListener('submit', handleFormSubmit);
