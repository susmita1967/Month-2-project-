document.addEventListener("DOMContentLoaded", function () {
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('Email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('cpassword');
    const termsCheckbox = document.getElementById('remember');
    const registerButton = document.querySelector('.register button');

    registerButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const fname = fnameInput.value.trim();
        const lname = lnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const termsChecked = termsCheckbox.checked;

        // Validation checks
        if (fname === '') {
            alert('Please enter your first name.');
            return;
        }
        if (lname === '') {
            alert('Please enter your last name.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!validatePassword(password)) {
            alert('Please enter a password with at least 8 characters.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        if (!termsChecked) {
            alert('Please agree to the terms and privacy policies.');
            return;
        }

        // If all validations pass, you can proceed with registration
        alert('Registration successful!');
        // Redirect to the login page
        window.location.href = 'login.html';
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }
});
