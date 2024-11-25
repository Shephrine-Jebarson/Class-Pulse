// about.js

// Interactive feature: Scroll alert
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 200) {
        console.log("You've scrolled through the About page!");
    }
});

// Interactive feature: Alert for team cards
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('h4').textContent}!`);
    });
});
