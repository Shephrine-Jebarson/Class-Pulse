// Login Page JavaScript

// document.querySelector("form").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent form submission

//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     // Validation
//     if (!email || !password) {
//         alert("Both fields are required!");
//         return;
//     }

//     if (!validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return;
//     }

//     // Placeholder authentication
//     if (email === "test@example.com" && password === "password123") {
//         alert("Login successful!");
//         // Redirect to the dashboard or homepage
//         window.location.href = "index.html";
//     } else {
//         alert("Invalid email or password.");
//     }
// });

// // Function to validate email
// function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find((user) => user.username === username && user.password === password);

    if (validUser) {
        alert(`Welcome, ${validUser.username}!`);
        // Redirect to index.html after successful login
        window.location.href = "index.html";
    } else {
        alert("Incorrect username or password!");
    }
});
