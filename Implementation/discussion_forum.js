
// const postForm = document.getElementById("post-form");
// const postTitleInput = document.getElementById("post-title");
// const postContentInput = document.getElementById("post-content");
// const discussionBoard = document.getElementById("discussion-board");

// // Array to store posts and replies
// let posts = [];

// // Function to render the discussion board
// function renderDiscussionBoard() {
//     discussionBoard.innerHTML = ""; // Clear existing posts

//     if (posts.length === 0) {
//         discussionBoard.innerHTML = "<p>No discussions yet. Start by posting a topic!</p>";
//         return;
//     }

//     posts.forEach((post, index) => {
//         // Create post container
//         const postDiv = document.createElement("div");
//         postDiv.classList.add("discussion-post");

//         // Post title
//         const title = document.createElement("h3");
//         title.classList.add("post-title");
//         title.textContent = post.title;

//         // Post content
//         const content = document.createElement("p");
//         content.classList.add("post-content");
//         content.textContent = post.content;

//         // Post meta info
//         const meta = document.createElement("p");
//         meta.classList.add("post-meta");
//         meta.textContent = `Posted on ${post.date}`;

//         // Reply container
//         const replyContainer = document.createElement("div");
//         replyContainer.classList.add("reply-container");

//         // Add existing replies to the reply container
//         post.replies.forEach((reply) => {
//             const replyElement = document.createElement("p");
//             replyElement.classList.add("reply-message");
//             replyElement.textContent = reply;
//             replyContainer.appendChild(replyElement);
//         });

//         // Reply input and button
//         const replyInput = document.createElement("textarea");
//         replyInput.classList.add("reply-input");
//         replyInput.placeholder = "Write a reply...";

//         const replyButton = document.createElement("button");
//         replyButton.textContent = "Reply";
//         replyButton.classList.add("reply-button");
//         replyButton.addEventListener("click", () => handleReply(index, replyInput.value));

//         // Delete button
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete Post";
//         deleteButton.classList.add("delete-button");
//         deleteButton.addEventListener("click", () => deletePost(index));

//         // Append elements to post container
//         postDiv.appendChild(title);
//         postDiv.appendChild(content);
//         postDiv.appendChild(meta);
//         postDiv.appendChild(replyContainer);
//         postDiv.appendChild(replyInput);
//         postDiv.appendChild(replyButton);
//         postDiv.appendChild(deleteButton);

//         // Add the post container to the discussion board
//         discussionBoard.appendChild(postDiv);
//     });
// }

// // Handle form submission
// postForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Get input values
//     const title = postTitleInput.value.trim();
//     const content = postContentInput.value.trim();
//     const date = new Date().toLocaleString();

//     // Validate inputs
//     if (!title || !content) {
//         alert("Both title and content are required!");
//         return;
//     }

//     // Add new post to the array
//     posts.push({ title, content, date, replies: [] });

//     // Clear form inputs
//     postTitleInput.value = "";
//     postContentInput.value = "";

//     // Re-render discussion board
//     renderDiscussionBoard();
// });

// // Handle reply to a post
// function handleReply(index, replyContent) {
//     if (replyContent.trim()) {
//         posts[index].replies.push(replyContent.trim());
//         renderDiscussionBoard();
//     } else {
//         alert("Reply cannot be empty!");
//     }
// }

// // Handle delete post
// function deletePost(index) {
//     if (confirm("Are you sure you want to delete this post?")) {
//         posts.splice(index, 1);
//         renderDiscussionBoard();
//     }
// }

// // Initial render
// renderDiscussionBoard();
// Render the discussion board
// Render the discussion board
// Array to store posts
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// Discussion Board element
const discussionBoard = document.getElementById("discussion-board");

// Save posts to localStorage
function savePostsToLocalStorage() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

// Handle new post submission
document.getElementById("post-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const postTitle = document.getElementById("post-title").value.trim();
    const postContent = document.getElementById("post-content").value.trim();

    if (postTitle && postContent) {
        const newPost = {
            title: postTitle,
            content: postContent,
            date: new Date().toLocaleString(),
            replies: [],
        };

        posts.push(newPost);
        savePostsToLocalStorage();
        renderDiscussionBoard();

        document.getElementById("post-form").reset();
    } else {
        alert("Please fill out both the title and content.");
    }
});

// Handle replying to a post
function handleReply(postIndex, replyContent) {
    if (replyContent.trim() !== "") {
        posts[postIndex].replies.push(replyContent.trim());
        savePostsToLocalStorage();
        renderDiscussionBoard();
    } else {
        alert("Reply cannot be empty.");
    }
}

// Handle deleting a post
function deletePost(postIndex) {
    if (confirm("Are you sure you want to delete this post?")) {
        posts.splice(postIndex, 1);
        savePostsToLocalStorage();
        renderDiscussionBoard();
    }
}

// Render the discussion board
function renderDiscussionBoard() {
    discussionBoard.innerHTML = ""; // Clear existing posts

    if (posts.length === 0) {
        discussionBoard.innerHTML = "<p>No discussions yet. Start by posting a topic!</p>";
        return;
    }

    posts.forEach((post, index) => {
        // Create post container
        const postDiv = document.createElement("div");
        postDiv.classList.add("discussion-post");

        // Post title
        const title = document.createElement("h3");
        title.classList.add("post-title");
        title.textContent = post.title;

        // Post content
        const content = document.createElement("p");
        content.classList.add("post-content");
        content.textContent = post.content;

        // Post meta info
        const meta = document.createElement("p");
        meta.classList.add("post-meta");
        meta.textContent = `Posted on ${post.date}`;

        // Reply container
        const replyContainer = document.createElement("div");
        replyContainer.classList.add("reply-container");

        // Add existing replies to the reply container
        post.replies.forEach((reply) => {
            const replyElement = document.createElement("p");
            replyElement.classList.add("reply-message");
            replyElement.textContent = reply;
            replyContainer.appendChild(replyElement);
        });

        // Reply input
        const replyInput = document.createElement("textarea");
        replyInput.classList.add("reply-input");
        replyInput.placeholder = "Write a reply...";

        // Reply button
        const replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        replyButton.classList.add("reply-button");
        replyButton.addEventListener("click", () => handleReply(index, replyInput.value));

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => deletePost(index));

        // Button container (to position buttons below the input)
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.appendChild(replyButton);
        buttonContainer.appendChild(deleteButton);

        // Append elements to post container
        postDiv.appendChild(title);
        postDiv.appendChild(content);
        postDiv.appendChild(meta);
        postDiv.appendChild(replyContainer);
        postDiv.appendChild(replyInput);
        postDiv.appendChild(buttonContainer); // Add buttons below the reply input

        // Add the post container to the discussion board
        discussionBoard.appendChild(postDiv);
    });
}

// Initial render of the discussion board
document.addEventListener("DOMContentLoaded", renderDiscussionBoard);


