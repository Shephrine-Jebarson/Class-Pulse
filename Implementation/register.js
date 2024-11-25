// Register Page JavaScript

// document.querySelector("form").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent form submission

//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const confirmPassword = document.getElementById("confirm-password").value.trim();

//     // Validation
//     if (!username || !email || !password || !confirmPassword) {
//         alert("All fields are required!");
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

//     if (password !== confirmPassword) {
//         alert("Passwords do not match.");
//         return;
//     }

//     // On successful validation
//     alert("Registration successful!");
//     // You can redirect to a login page or send the data to the backend here
//     window.location.href = "login.html";
// });

// // Function to validate email
// function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.username === username || user.email === email);

    if (userExists) {
        alert("User already registered!");
        return;
    }

    users.push({ email, username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html";
});
