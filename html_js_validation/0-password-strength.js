// validation.js

document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const errorElement = document.getElementById("error");

    passwordForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Get the entered password
        const password = passwordInput.value;

        // Validate the password
        const isValid = validatePassword(password);

        if (isValid) {
            // If the password is valid, allow the form submission
            passwordForm.submit();
        } else {
            // If the password is invalid, display an error message
            errorElement.textContent = "Password must meet the criteria.";
        }
    });

    function validatePassword(password) {
        // Define regular expressions for criteria
        const lengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        // Check each criterion
        const isLengthValid = lengthRegex.test(password);
        const isUppercaseValid = uppercaseRegex.test(password);
        const isLowercaseValid = lowercaseRegex.test(password);
        const isDigitValid = digitRegex.test(password);
        const isSpecialCharValid = specialCharRegex.test(password);

        // Return true if all criteria are met
        return (
            isLengthValid &&
            isUppercaseValid &&
            isLowercaseValid &&
            isDigitValid &&
            isSpecialCharValid
        );
    }
});
