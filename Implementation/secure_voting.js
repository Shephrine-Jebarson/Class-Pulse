// // Function to initialize votes in localStorage if not already set
// function initializeVotes() {
//     const storedVotes = localStorage.getItem("votes");
//     if (!storedVotes) {
//         const initialVotes = {
//             "Candidate 1": 0,
//             "Candidate 2": 0,
//             "Candidate 3": 0,
//         };
//         localStorage.setItem("votes", JSON.stringify(initialVotes));
//     }
// }

// // Function to cast a vote
// function castVote(candidateId) {
//     const storedVotes = localStorage.getItem("votes");
//     const votes = JSON.parse(storedVotes);

//     // Map candidateId to candidate names
//     const candidateMap = {
//         "1": "Candidate 1",
//         "2": "Candidate 2",
//         "3": "Candidate 3",
//     };

//     const candidateName = candidateMap[candidateId];
//     if (candidateName) {
//         votes[candidateName] += 1;

//         // Update localStorage with the new vote counts
//         localStorage.setItem("votes", JSON.stringify(votes));

//         alert(`Thank you for voting for ${candidateName}!`);
//     } else {
//         alert("Invalid candidate selection.");
//     }
// }

// // Event listener for vote buttons
// document.addEventListener("DOMContentLoaded", () => {
//     // Initialize vote data
//     initializeVotes();

//     // Add event listeners to each vote button
//     const voteButtons = document.querySelectorAll(".vote-button");
//     voteButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const candidateId = button.getAttribute("data-candidate");
//             castVote(candidateId);
//         });
//     });

//     // Add functionality to the Submit button
//     const submitButton = document.querySelector(".submit-button");
//     submitButton.addEventListener("click", () => {
//         alert("Your vote has been successfully submitted!");
//     });
// });
// Initialize votes in localStorage if not already present
// Function to initialize votes in localStorage
function initializeVotes() {
    const storedVotes = localStorage.getItem("votes");
    if (!storedVotes) {
        const initialVotes = {
            "Candidate 1": 0,
            "Candidate 2": 0,
            "Candidate 3": 0,
            "Candidate 4": 0,
        };
        localStorage.setItem("votes", JSON.stringify(initialVotes));
    }
}

// Function to cast a vote
function castVote(candidateId) {
    const storedVotes = localStorage.getItem("votes");
    const votes = JSON.parse(storedVotes);

    // Map candidateId to candidate names
    const candidateMap = {
        "1": "Candidate 1",
        "2": "Candidate 2",
        "3": "Candidate 3",
        "4": "Candidate 4",
    };

    const candidateName = candidateMap[candidateId];
    if (candidateName) {
        votes[candidateName] += 1;

        // Update localStorage with the new vote counts
        localStorage.setItem("votes", JSON.stringify(votes));

        alert(`Thank you for voting for ${candidateName}!`);
    } else {
        alert("Invalid candidate selection.");
    }
}

// Event listener for page initialization
document.addEventListener("DOMContentLoaded", () => {
    // Initialize vote data
    initializeVotes();

    // Add event listeners to each vote button
    const voteButtons = document.querySelectorAll(".vote-button");
    voteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const candidateId = button.getAttribute("data-candidate");
            castVote(candidateId);
        });
    });

    // Add functionality to the Submit button
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", () => {
        alert("Your vote has been successfully submitted!");
    });
});

