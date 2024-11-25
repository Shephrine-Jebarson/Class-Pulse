
// const votes = JSON.parse(localStorage.getItem("votes"));

// // Ensure data exists
// if (votes) {
//     // Determine the winner
//     let winner = null;
//     let maxVotes = 0;

//     for (const [candidate, count] of Object.entries(votes)) {
//         if (count > maxVotes) {
//             maxVotes = count;
//             winner = candidate;
//         }
//     }

//     // Display results
//     const resultsDiv = document.getElementById("results");
//     resultsDiv.innerHTML = `
//         <p>Candidate 1: ${votes["Candidate 1"]} votes</p>
//         <p>Candidate 2: ${votes["Candidate 2"]} votes</p>
//         <p>Candidate 3: ${votes["Candidate 3"]} votes</p>
//         <p>Candidate 4: ${votes["Candidate 4"]} votes</p>
//         <h3>The winner is ${winner} with ${maxVotes} votes!</h3>
//     `;
// } else {
//     console.error("No vote data found in localStorage.");
//     const resultsDiv = document.getElementById("results");
//     resultsDiv.innerHTML = "<p>No vote data found.</p>";
// }
// Function to display results
function displayResults() {
    const votes = JSON.parse(localStorage.getItem("votes"));

    const resultsDiv = document.getElementById("results");

    if (votes) {
        // Determine the winner
        let winner = null;
        let maxVotes = 0;

        for (const [candidate, count] of Object.entries(votes)) {
            if (count > maxVotes) {
                maxVotes = count;
                winner = candidate;
            }
        }

        // Display results
        resultsDiv.innerHTML = `
            <p>Candidate 1: ${votes["Candidate 1"] || 0} votes</p>
            <p>Candidate 2: ${votes["Candidate 2"] || 0} votes</p>
            <p>Candidate 3: ${votes["Candidate 3"] || 0} votes</p>
            
            <h3>The winner is ${winner} with ${maxVotes} votes!</h3>
        `;
    } else {
        console.error("No vote data found in localStorage.");
        resultsDiv.innerHTML = "<p>No vote data found.</p>";
    }
}

// Function to reset votes
function resetVotes() {
    // Initialize votes to zero for all candidates
    const initialVotes = {
        "Candidate 1": 0,
        "Candidate 2": 0,
        "Candidate 3": 0,
        // "Candidate 4": 0,
    };

    // Save the reset votes in localStorage
    localStorage.setItem("votes", JSON.stringify(initialVotes));

    // Alert the user
    alert("Votes have been reset! The voting process has started over.");

    // Update the displayed results
    displayResults();
}

// Event listener for refresh button
document.getElementById("refresh-button").addEventListener("click", resetVotes);

// Display results when the page loads
document.addEventListener("DOMContentLoaded", displayResults);

