document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('Email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login button');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const email = emailInput.value.trim(); // Trim removes leading and trailing whitespaces
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!validatePassword(password)) {
            alert('Please enter a password with at least 8 characters.');
            return;
        }
        // If all validations pass, redirect to home.html
        alert('Login successful!');
        window.location.href = "home.html";
    });

    function validateEmail(email) {
        // This regex checks for a basic email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        // This checks if the password has at least 8 characters
        return password.length >= 8;
    }
});
