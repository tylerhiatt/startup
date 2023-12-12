// deal with sign in / create button, direct user to sign in page
document.getElementById("signInButton").addEventListener("click", function() {
    window.location.href = "signin.html";
});

// Function to display the review on the page
function displayReview(reviewText) {
    // Modify this to display the review in a specific part of your page
    const reviewsContainer = document.getElementById("reviewsContainer");
    if (reviewsContainer) {
        const reviewElement = document.createElement("div");
        reviewElement.className = "review";
        reviewElement.textContent = reviewText;
        reviewsContainer.appendChild(reviewElement);
    }
}

// Placeholder function to simulate sending the review to a database
function sendReviewToDatabase(reviewText) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., an HTTP request)
        setTimeout(() => {
            // Replace this with actual database logic in the future
            console.log("Sending review to the database:", reviewText);
            
            // Resolve the promise to simulate a successful submission
            resolve("Review submitted");
            
            // simulate a submission error
            // reject("Failed to submit review");
        }, 1000);
    });
}

// WebSocket handler (to be integrated with a real WebSocket connection)
let websocket; // Placeholder for WebSocket connection
function initWebSocket() {
    // Initialize the WebSocket connection here (like websocket = new WebSocket(url);)
    // Placeholder for WebSocket URL
    const wsUrl = '';

    websocket = new WebSocket(wsUrl);

    // Handle incoming WebSocket messages
    websocket.onmessage = function(event) {
        const data = JSON.parse(event.data);
        if (data.type === 'newReview') {
            displayReview(data.reviewText);
        }
    };

    // Handle WebSocket errors
    websocket.onerror = function(error) {
        console.error("WebSocket Error:", error);
    };
}

// Call initWebSocket() when ready

function submitReview() {
    var reviewText = document.getElementById("reviewText").value.trim();
    if (reviewText === "") {
        alert("Please write a review before submitting.");
        return;
    }

    sendReviewToDatabase(reviewText)
        .then(response => {
            // Clear the textarea after submission
            document.getElementById("reviewText").value = "";
            
            // WebSocket should handle displaying new reviews in real-time
        })
        .catch(error => {
            console.error("Error submitting review:", error);
        });
}

// Initialize WebSocket when ready
// initWebSocket();

