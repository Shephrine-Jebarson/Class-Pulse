// Event Calendar JavaScript

const calendarGrid = document.querySelector('.calendar-grid');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const eventForm = document.getElementById('add-event-form');
const eventList = document.getElementById('event-list');

let currentDate = new Date();

// Render the calendar
function renderCalendar(date) {
    calendarGrid.innerHTML = ''; // Clear existing cells
    const year = date.getFullYear();
    const month = date.getMonth();
    monthYear.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill empty slots before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }

    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        dayCell.addEventListener('click', () => alert(`You clicked on ${month + 1}/${day}/${year}`));
        calendarGrid.appendChild(dayCell);
    }
}

// Navigate months
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Handle event submission
eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;

    if (!title || !date) {
        alert('Please fill in all fields.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${date}: ${title}`;
    eventList.appendChild(listItem);

    // Clear form inputs
    document.getElementById('event-title').value = '';
    document.getElementById('event-date').value = '';
});

// Initial render
renderCalendar(currentDate);
