document.addEventListener('DOMContentLoaded', function () {
    // Function to validate the form
    function validateForm() {
        var fname = document.getElementById('fname').value.trim();
        var lname = document.getElementById('lname').value.trim();
        var mail = document.getElementById('mail').value.trim();
        var pno = document.getElementById('pno').value.trim();
        var region = document.getElementById('region').value.trim();
        var option = document.getElementById('s').value;

        // Check if required fields are empty
        if (fname === '' || lname === '' || mail === '' || pno === '' || region === '' || option === 'All') {
            alert('Please fill out all required fields.');
            return false;
        }

        // Validate email address
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Validate phone number
        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(pno)) {
            alert('Please enter a valid phone number.');
            return false;
        }

        return true;
    }

    // Attach click event listener to the Payment button
    document.querySelector('.paym').addEventListener('click', function () {
        // Validate the form before redirecting to payment page
        if (validateForm()) {
            window.location.href = 'payment.html';
        }
    });

    // Get references to the input elements for additional validation
    var fullnameInput = document.getElementById('fullname');
    var cardnumberInput = document.getElementById('cardnumber');
    var expdateInput = document.getElementById('expdate');
    var cvcInput = document.getElementById('cvc');

    // Add event listeners for input validation
    fullnameInput.addEventListener('blur', validateFullName);
    cardnumberInput.addEventListener('blur', validateCardNumber);
    expdateInput.addEventListener('blur', validateExpDate);
    cvcInput.addEventListener('blur', validateCVC);

    // Validation functions
    function validateFullName() {
        var fullname = fullnameInput.value.trim();
        if (!/^[a-zA-Z\s]+$/.test(fullname)) {
            alert('Full name must contain only letters and spaces');
            fullnameInput.value = '';
            fullnameInput.focus();
        }
    }

    function validateCardNumber() {
        var cardnumber = cardnumberInput.value.trim();
        if (!/^\d{1,12}$/.test(cardnumber)) {
            alert('Card number must be numeric and up to 12 digits long');
            cardnumberInput.value = '';
            cardnumberInput.focus();
        }
    }

    // function validateExpDate() {
    //     var expdate = expdateInput.value.trim();
    //     if (!/^\d{2}\/\d{4}$/.test(expdate)) {
    //         alert('Expiration date must be in the format MM/YYYY');
    //         expdateInput.value = '';
    //         expdateInput.focus();
    //     }
    // }

    function validateCVC() {
        var cvc = cvcInput.value.trim();
        if (!/^\d{1,3}$/.test(cvc)) {
            alert('CVC must be numeric and up to 3 digits long');
            cvcInput.value = '';
            cvcInput.focus();
        }
    }

    const saveButton = document.getElementById('saveButton');

    // Add event listener for button click
    saveButton.addEventListener('click', function () {
        saveButton.classList.toggle('filled');
    });
});
