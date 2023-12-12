import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signinpage.css'; 

const SigninPage = () => {
  // If you need to manage state for inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process login here or update state as needed
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    fetch('/auth/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // redirect to home page
        alert('Success')
        navigate('/');

    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here, such as displaying a notification to the user
        alert('Error');
    });

  };

  return (
    <body className="d-flex align-items-center py-4 bg-body-tertiary">
      <div className='signin-container'>
      <main className="form-signin w-100 m-auto">
        <form id="loginForm" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <p>Stay updated with our latest products and promotions.</p>

          {/* Email Input */}
          <div className="form-floating">
            <label htmlFor="floatingInput">Email address</label>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="form-floating">
            <label htmlFor="floatingPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-100 py-2 custom-button-sandy" type="submit">
            Sign in / Create Account
          </button>

          {/* Footer Links */}
          <p className="mt-5 mb-3 text-body-secondary">&copy; Fernweh Ventures</p>
          <ul className="list-inline">
            <li className="list-inline-item custom-blue"><Link to="/">Home</Link></li>
            <li className="list-inline-item custom-blue"><Link to="/about">About</Link></li>
          </ul>
        </form>
      </main>
      </div>
    </body>
  );
};

export default SigninPage;
