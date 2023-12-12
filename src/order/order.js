document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  // grab all the forms wanted to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Function to post data to server
  async function postData(url = '', data = {}) {
      const response = await fetch(url, {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });
      return response.json();
  }

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
      } else {
        // If form is valid, process the form
        const formData = {
          firstName: document.getElementById('firstName').value,
          lastName: document.getElementById('lastName').value,
          username: document.getElementById('username').value,
          email: document.getElementById('email').value,
          address: document.getElementById('address').value,
          address2: document.getElementById('address2').value,
          country: document.getElementById('country').value,
          state: document.getElementById('state').value,
          zip: document.getElementById('zip').value,
          paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        };

        // change server endpoint to the database where i want to send the data to
        postData('/api/order', formData)
          .then(data => {
            // Handle response here
            console.log(data); // JSON data returned by server
            alert('Order placed successfully!');
            // Optionally redirect to another page
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('Failed to place order!');
          });
      }

      form.classList.add('was-validated');
    }, false);
  });
});
