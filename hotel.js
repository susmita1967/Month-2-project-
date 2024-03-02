document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.option button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle active class for clicked button
            this.classList.toggle('active');
        });
    });
    const hotelButton = document.getElementById('hotelButton');

    // Add click event listener to the hotel button
    hotelButton.addEventListener('click', function () {
        // Redirect to the hotel.html page
        window.location.href = 'hotel.html';
    });
    const searchButton = document.getElementById('searchButton');

    // Add click event listener to the search button
    searchButton.addEventListener('click', function () {
        // Redirect to the exclusive.html page
        window.location.href = 'exclusive.html';
    });
});
