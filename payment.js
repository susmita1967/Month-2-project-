document.addEventListener("DOMContentLoaded", function() {
    // Get form elements
    const firstNameInput = document.getElementById("fname1");
    const lastNameInput = document.getElementById("lname1");
    const phoneNumberInput = document.getElementById("pno1");
    const cardNumberInput = document.getElementById("cno1");
    const cvcInput = document.getElementById("CVC1");
    const expInput = document.getElementById("exp1");

    // Function to validate inputs
    function validateInputs() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const phoneNumber = phoneNumberInput.value.trim();
        const cardNumber = cardNumberInput.value.trim();
        const cvc = cvcInput.value.trim();
        const exp = expInput.value.trim();

        // Basic validation - check if inputs are empty
        if (firstName === "") {
            alert("Please enter your first name.");
            return false;
        }

        if (lastName === "") {
            alert("Please enter your last name.");
            return false;
        }

        if (phoneNumber === "" || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            alert("Please enter a valid phone number with 10 digits.");
            return false;
        }

        if (cardNumber === "" || cardNumber.length !== 12 || isNaN(cardNumber)) {
            alert("Please enter a valid card number with 12 digits.");
            return false;
        }

        if (cvc === "" || cvc.length !== 3 || isNaN(cvc)) {
            alert("Please enter a valid CVC with 3 digits.");
            return false;
        }

        if (exp === "") {
            alert("Please enter your expiration date.");
            return false;
        }

        // Additional validation logic can be added here
        
        // If all validations pass
        return true;
    }

    // Add event listener to Confirm and Pay button
    const confirmButton = document.getElementById("b1");
    confirmButton.addEventListener("click", function() {
        if (validateInputs()) {
            alert("Confirmation successful!");
            // Additional logic for payment confirmation can be added here
        } else {
            alert("Please fill in all required fields.");
        }
    });
});
