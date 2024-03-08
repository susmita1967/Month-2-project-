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
    const headers = document.querySelectorAll('.dive .head');
    
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.textContent = '\u25BC'; // Down arrow
            } else {
                content.style.display = 'block';
                arrow.textContent = '\u25B2'; // Up arrow
            }
        });
    });
});
