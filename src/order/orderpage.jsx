import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './orderpage.css';

const OrderPage = () => {
  // State for form inputs (add more as per your form fields)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [optionalAddress, setOptionalAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');  // default to credit
  const [ccName, setCcName] = useState('');
  const [ccNumber, setCcNumber] = useState('');
  const [ccExpiration, setCcExpiration] = useState('');
  const [ccCvv, setCcCvv] = useState('');
  const [sameAddress, setSameAddress] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);

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

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      // Create an object with the form data
      const formData = {
        firstName,
        lastName,
        promoCode,
        username,
        email,
        address,
        address2: optionalAddress, // address2 corresponds to optionalAddress
        country,
        state,
        zip,
        paymentMethod,
        ccName,
        ccNumber,
        ccExpiration,
        ccCvv,
        sameAddress,
        saveInfo,
      };

      // Post data to the server
      try {
        const responseData = await postData('/api/order', formData);
        console.log(responseData); // Handle the response data
        alert('Order placed successfully!');
        // Optionally redirect or update UI
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to place order!');
      }
    }

    form.classList.add('was-validated');
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
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill" style={{ color: 'white' }}>3</span>
            </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-body-secondary">Brief description</small>
                    </div>
                    <span className="text-body-secondary">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-body-secondary">Brief description</small>
                    </div>
                    <span className="text-body-secondary">$8</span>
                </li>

                <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                    <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                </li>
            </ul>

            <form className="card p-2" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
            </form>
          </div>

          {/* Form for Billing address */}
          <div className="col-md-7 col-lg-8 pt-2">
            <h4 className="mb-3">Billing address</h4>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                {/* ... Form inputs ... */}
                <div className="row g-3">

                    <div className="col-sm-6 pt-2">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                    </div>

                    <div className="col-sm-6 pt-2">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                    </div>

                    <div className="col-12 pt-2">
                        <label htmlFor="username" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text">@</span>
                          <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                          />
                          <div className="invalid-feedback">
                            Your username is required.
                          </div>
                        </div>
                    </div>

                    <div className="col-12 pt-2">
                        <label htmlFor="email" className="form-label">Email <span className="light-gray-text">(Optional)</span></label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="col-12 pt-2">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="1234 Main St"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                    </div>

                    <div className="col-12 pt-2">
                        <label htmlFor="optionalAddress" className="form-label">Address 2 <span className="light-gray-text">(Optional)</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="optionalAddress"
                            placeholder="Apartment or suite"
                            value={optionalAddress}
                            onChange={(e) => setOptionalAddress(e.target.value)}
                        />
                    </div>

                    <div className="col-md-5 pt-3">
                      <label htmlFor="country" className="form-label">Country</label>
                      <select 
                        className="form-select" 
                        id="country" 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="United States">United States</option>
                        {/* Add more options as needed */}
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4 pt-3">
                      <label htmlFor="state" className="form-label">State</label>
                      <select 
                        className="form-select" 
                        id="state" 
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="Utah">Utah</option>
                        {/* Add more options as needed */}
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3 pt-2">
                      <label htmlFor="zip" className="form-label">Zip</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="zip" 
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>

                </div>

                <hr className="my-4"></hr>
                {/* ... TODO: Payment info ... */}
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                    checked={sameAddress}
                    onChange={(e) => setSameAddress(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>

                <hr className="my-4"></hr>

                <h4 className="mb-3">Payment</h4>

                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked={paymentMethod === 'credit'}
                      onChange={() => setPaymentMethod('credit')}
                      required
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked={paymentMethod === 'debit'}
                      onChange={() => setPaymentMethod('debit')}
                      required
                    />
                    <label className="form-check-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      required
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>

                </div>

                <div className="row gy-3">
                  <div className="col-md-6 pt-2">
                    <label htmlFor="cc-name" className="form-label">Name on Card</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cc-name"
                      placeholder="Full name as displayed on card" 
                      value={ccName}
                      onChange={(e) => setCcName(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Name on card is required.
                    </div>
                  </div>

                  <div className="col-md-6 pt-2">
                    <label htmlFor="cc-number" className="form-label">Credit Card Number</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cc-number"
                      value={ccNumber}
                      onChange={(e) => setCcNumber(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required.
                    </div>
                  </div>

                  <div className="col-md-3 pt-2">
                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cc-expiration"
                      value={ccExpiration}
                      onChange={(e) => setCcExpiration(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date is required.
                    </div>
                  </div>

                  <div className="col-md-3 pt-2">
                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cc-cvv"
                      value={ccCvv}
                      onChange={(e) => setCcCvv(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Security code is required.
                    </div>
                  </div>

                </div>

                <hr className="my-4"></hr>


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
            <li className="list-inline-item custom-blue"><Link to="/signin">Sign In</Link></li>
          </ul>
        </footer>
      </main>
    </div>
    </body>
  );
};

export default OrderPage;
