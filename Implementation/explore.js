// JavaScript for Explore Features Page

// Function to add hover animations dynamically
document.querySelectorAll('.feature-card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
        card.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
});

// Functionality for displaying more details
document.querySelectorAll('.feature-card').forEach((card) => {
    card.addEventListener('click', () => {
        const featureTitle = card.querySelector('h2').textContent;
        const featureDescription = card.querySelector('p').textContent;

        // Show details in an alert or modal
        alert(`Feature: ${featureTitle}\nDescription: ${featureDescription}`);
    });
});

// Smooth scroll to hero section on page load
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Navigation functionality (optional example)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Prevent default behavior for demo purposes
        if (link.getAttribute('href') === '#') {
            event.preventDefault();
            alert('Navigation is not set yet.');
        }
    });
});
