import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderPage.css'; // Adjust the path as per your project structure

const OrderPage = () => {
  // State for form inputs (add more as per your form fields)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [promoCode, setPromoCode] = useState('');

  // ... other state variables

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the order here
    // You might want to send this data to your server
  };

  return (
    <body className="py-5 text-center">
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Order Your Adventure Gear</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-primary">Your cart</span>
                <span class="badge bg-primary rounded-pill" style="color: white">3</span>
            </h4>
            <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-body-secondary">Brief description</small>
                    </div>
                    <span class="text-body-secondary">$12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-body-secondary">Brief description</small>
                    </div>
                    <span class="text-body-secondary">$8</span>
                </li>

                <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                    <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                    </div>
                    <span class="text-success">−$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                </li>
            </ul>

            <form class="card p-2" onSubmit={handleSubmit}>
                <div class="input-group">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button type="submit" class="btn btn-secondary">Redeem</button>
                </div>
            </form>
          </div>

          {/* Form for Billing address */}
          <div className="col-md-7 col-lg-8 pt-2">
            <h4 className="mb-3">Billing address</h4>
            <form onSubmit={handleSubmit} className="needs-validation" novalidate>
                {/* ... Form inputs ... */}
                <div className="row g-3">
                    
                    <div className="col-sm-6 pt-2">
                        <label for="firstName" class="form-label">First name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    
                    {/* ... More form fields ... */}

                    
                </div>
                {/* Submit Button */}
                <button type="submit" className="w-100 btn btn-primary btn-lg custom-button-sandy">Place Order</button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="my-5 pt-5 text-body-secondary text-center text-small">
          <p className="mb-1">&copy; Fernweh Ventures</p>
          <ul className="list-inline">
            <li className="list-inline-item custom-blue"><Link to="/">Home</Link></li>
            <li className="list-inline-item custom-blue"><Link to="/about">About</Link></li>
          </ul>
        </footer>
      </main>
    </div>
    </body>
  );
};

export default OrderPage;
