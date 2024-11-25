// JavaScript for the Index Page

// Function to handle navigation
function navigateToPage(buttonId, targetUrl) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = targetUrl;
        });
    } else {
        console.error(`Button with ID ${buttonId} not found.`);
    }
}

// Assign navigation for each button
navigateToPage('login-button', 'login.html');          // Login page
navigateToPage('register-button', 'register.html');    // Register page
navigateToPage('explore-button', 'explore.html');      // Explore Features page
navigateToPage('calendar-button', 'event_calendar.html'); // Event Calendar page
