     // Function to generate dynamic input fields
        function generateInputFields(numFields) {
            const inputContainer = document.getElementById("inputContainer");
            inputContainer.innerHTML = ""; // Clear previous fields

            for (let i = 1; i <= numFields; i++) {
                const inputField = document.createElement("input");
                inputField.type = "text";
                inputField.name = `field${i}`;
                inputField.placeholder = `Field ${i}`;
                inputContainer.appendChild(inputField);
            }
        }

        // Function to validate the form
        function validateForm(event) {
            event.preventDefault(); // Prevent form submission

            const selectField = document.getElementById("selectField");
            const numFields = parseInt(selectField.value);

            if (numFields === 0) {
                alert("Please select the number of fields.");
                return;
            }

            for (let i = 1; i <= numFields; i++) {
                const inputField = document.getElementsByName(`field${i}`)[0];
                if (inputField.value.trim() === "") {
                    alert("Please fill in all fields.");
                    return;
                }
            }

            // If all fields are filled, you can submit the form here
            alert("Form submitted successfully!");
            // document.getElementById("myForm").submit(); // Uncomment this line to submit the form
        }

        // Add event listeners
        document.getElementById("selectField").addEventListener("change", function () {
            const numFields = parseInt(this.value);
            generateInputFields(numFields);
        });

        document.getElementById("myForm").addEventListener("submit", validateForm);

