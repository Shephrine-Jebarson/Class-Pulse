// JavaScript for Secure Voting Home Page

// Event Listener for "Start Voting" Button
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    // You can add logic here to check if the user is logged in, or redirect to login if not
    // alert('Redirecting to the secure voting page!');
    // window.location.href = "sec"; // Redirect to login page
});

// Event Listener for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Add any page-specific logic here before navigating
        console.log(`Navigating to ${event.target.innerText} page.`);
    });
});

// Optional: Smooth Scroll for anchor links (if used)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
