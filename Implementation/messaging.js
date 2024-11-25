// messaging.js

// Select elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');

// Array to store messages
let messages = [];

// Predefined replies
const predefinedReplies = {
    hello: "Hi there! How can I assist you today?",
    hey: "Hey! What's on your mind?",
    hi: "Hello! How can I help?",
    "how are you": "I'm just a bot, but I'm here to help you!",
    bye: "Goodbye! Have a great day!",
    goodbye: "See you next time! Take care.",
    thanks: "You're welcome! Let me know if you need anything else.",
    "thank you": "Happy to help! 😊",
    "what is this": "This is your interactive messaging assistant!",
    default: "That's interesting! Tell me more.",
};

// Function to render messages
function renderMessages() {
    messageList.innerHTML = ''; // Clear the list

    messages.forEach((msg) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(msg.sender === 'user' ? 'user' : 'other');
        messageDiv.textContent = msg.content;

        messageList.appendChild(messageDiv);
    });

    // Scroll to the bottom
    messageList.scrollTop = messageList.scrollHeight;
}

// Generate bot reply
function generateReply(userMessage) {
    const lowercasedMessage = userMessage.toLowerCase();
    return predefinedReplies[lowercasedMessage] || predefinedReplies.default;
}

// Handle form submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userMessage = messageInput.value.trim();
    if (!userMessage) return;

    // Add the user's message
    messages.push({ sender: 'user', content: userMessage });

    // Generate bot reply
    setTimeout(() => {
        const botReply = generateReply(userMessage);
        messages.push({ sender: 'other', content: botReply });
        renderMessages();
    }, 1000);

    // Clear the input
    messageInput.value = '';

    renderMessages();
});

// Initial render
renderMessages();
