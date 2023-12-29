const emoji = document.getElementById('emoji');
const resultDiv = document.getElementById('result');
const askingMessage = document.getElementById('asking-message');
const yesButton = document.querySelector('button[data-response="yes"]');
const noButton = document.querySelector('button[data-response="no"]');

let heartCount = 0; // Counter for the number of hearts

function handleResponse(response) {
    askingMessage.style.display = 'none'; // Hide the asking message
    if (response === 'yes') {
        emoji.src = 'happy_emoji.png'; // Update to the correct file extension
        resultDiv.innerHTML = "<h1>Yaaayyyy! 🌹</h1>";
        // Hide both "Yes" and "No" buttons
        yesButton.style.visibility = 'hidden';
        noButton.style.visibility = 'hidden';
    } else if (response === 'no') {
        // Display "Please?" with an increasing number of hearts
        heartCount++;
        const hearts = '❤️'.repeat(heartCount);
        resultDiv.innerHTML = `<h1>Please? ${hearts}</h1>`;

        // Move the "No" button to a random position
        // Move the "No" button to the lower middle part of the webpage
        const lowerMiddleX = window.innerWidth / 3; // Adjust this value for horizontal positioning
        const lowerMiddleY = (4 * window.innerHeight) / 4; // Adjust this value for vertical positioning

        const randomX = Math.floor(lowerMiddleX + Math.random() * (window.innerWidth / 2));
        const randomY = Math.floor(lowerMiddleY + Math.random() * (window.innerHeight / 4));

        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }
}

