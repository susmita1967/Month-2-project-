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
    const banner = document.querySelector('.banner');
    const images = banner.querySelectorAll('img');
    const text = banner.querySelector('.banner-text');
    const nextImages = document.querySelectorAll('.next img');
    let currentIndex = 0;
    let intervalId;

    // Function to switch to the next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Function to show the image at a specific index
    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    // Function to start the timer
    function startTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 12000);
    }

    // Function to handle image click
    function handleImageClick(i) {
        clearInterval(intervalId);
        showImage(i);
        text.style.animation = 'none';
        void text.offsetWidth;
        text.style.animation = 'slide-up 3s ease-in-out forwards';
        currentIndex = i;
        startTimer();
    }

    // Event listener for image clicks
    images.forEach((img, i) => {
        img.addEventListener('click', function () {
            handleImageClick(i);
        });
    });

    // Event listener for next images clicks
    nextImages.forEach((img, i) => {
        img.addEventListener('click', function () {
            const nextIndex = (currentIndex + 1) % images.length; // Calculate next index
            handleImageClick(nextIndex);
        });
    });

    // Show the first image initially and start the timer
    showImage(currentIndex);
    startTimer();
    // var botui = new BotUI("botui-container");

    // botui.message.add({
    //     content: "Hi! How can I assist you today?"
    // }).then(function () {
  
    //     return botui.action.text({
    //         action: {
    //             placeholder: "Type your message here..."
    //         }
    //     });
    // }).then(function (res) {
    //     botui.message.add({
    //         content: "You said: " + res.value
    //     });
    // });
    const chatbotContainer = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');

    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
    });

    sendBtn.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            displayMessage(userMessage, 'user');
            // You can send the user message to your backend for processing and get the bot's response
            const botResponse = getBotResponse(userMessage);
            displayMessage(botResponse, 'bot');
            userInput.value = ''; // Clear the input field after sending
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = sender + '-message';
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        // Scroll to the bottom of the chat window to show the latest message
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Here you can implement your logic to generate bot responses based on user input
        // This is just a placeholder example
        return "This is a bot response to: " + userMessage;
    }
});
