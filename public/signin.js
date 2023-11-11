document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent the default form submission

  const emailEl = document.getElementById("floatingInput");
  const email = emailEl.value.trim();
  const passwordEl = document.getElementById("floatingPassword"); 
  const password = passwordEl.value.trim();

  if (email === "" || password === "") {
      alert("Please enter both email and password.");
      return;
  }

  authenticateUser(email, password)
      .then(response => {
          // Handle successful authentication
          console.log("User authenticated successfully:", email);

          // Store the email in localStorage
          localStorage.setItem("userName", email);

          // Redirect to home page after login
          window.location.href = "index.html";
      })
      .catch(error => {
          // Handle authentication errors
          console.error("Authentication error:", error);
          alert("Authentication failed. Please check your credentials.");
      });
});

// Placeholder function to simulate user authentication against a database
function authenticateUser(email, password) {
  return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (like a HTTP request to authenticate the user)
      setTimeout(() => {
          // Replace this with actual authentication logic in the future
          console.log("Authenticating user:", email, password);
          
          // For now, just resolve the promise to simulate successful authentication
          resolve("User authenticated");

          // simulate an authentication error
          // reject("Invalid credentials");
      }, 1000);
  });
}
