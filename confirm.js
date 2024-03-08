document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.option button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle active class for clicked button
            this.classList.toggle('active');
        });
    });
    const hotelButton = document.querySelector('.option button:nth-child(3)');

    // Add event listener to the hotel button
    hotelButton.addEventListener('click', function () {
        // Redirect to hotel.html
        window.location.href = 'hotel.html';
    });
});
