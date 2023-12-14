import React from 'react';
import { Link } from 'react-router-dom'; 
import './aboutpage.css';

const AboutPage = () => {
  // Add any JavaScript functions from about.js here

  return (
    <main>
        <body className='aboutpage'>
      <section className="hero-section">
        <header className="mb-auto">
            <div>
            <h5 className="float-md-start mb-0 pt-3 text-center" style={{ color: '#083D77' }}>Fernweh Ventures</h5>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <Link className="nav-link fw-bold py-1 px-0" style={{ color: '#083D77' }} to="/">Home</Link>
                <Link className="nav-link fw-bold py-1 px-0 active" aria-current="page" style={{ textShadow: '1px 1px #000' }} to="/about">About</Link>
                <Link className="nav-link fw-bold py-1 px-0" style={{ color: '#083D77' }} to="/order">Order</Link>
                <Link className="nav-link fw-bold py-1 px-0" style={{ color: '#083D77' }} to="/signin">Sign In</Link>
            </nav>
            </div>
        </header>
        <div className="py-5 container">
            <div className="row py-lg-5">
                <div className="col-lg-8 col-md-12 mx-auto">
                <h1 style={{color: '#EBEBD3', textShadow: '1px 1px #000'}}>About Our Products</h1>
                <p style={{color: '#EBEBD3', textShadow: '1px 1px #000'}} className="lead text-body-secondary">At Fernweh Ventures, we are dedicated to making products that redefine the way you explore the great outdoors.</p>
                </div>
            </div>
        </div>
      </section>
      

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <img src="/website-pics/pexels-irockeritaly-7967504.jpg" className="card-img-top" alt="SUP Order" />
                        <div className="card-body">
                            <h5>Adventurer's Stand-Up Paddle Board</h5>
                            <p className="card-text">Discover the freedom of paddleboarding like never before with 
                            our lightweight stand-up paddle board that fits right into your 
                            backpack. Whether you're a seasoned paddler or a first-time adventurer, 
                            this board is designed for you.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Order <Link to="/order"></Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img src="/website-pics/pexels-pawan-yadav-2577274.jpg" className="card-img-top" alt="Backpack Order" />
                        <div className="card-body">
                            <h5>Adventurer's Backpack</h5>
                            <p className="card-text">Whether you're a seasoned paddleboard enthusiast or a beginner 
                            looking to explore serene waters, this backpack is designed to 
                            make your paddling experience easier, more convenient, and stylish.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Order <Link to="/order"></Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="customer-reviews-section py-4">
                <hr/>
                <div className="container">
                    <h2 className="text-center">Customer Reviews</h2>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="review">
                                <p className="review-text">"This paddle board is amazing! Lightweight and easy to carry."</p>
                                <p className="review-author">- John Doe</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="review">
                                <p className="review-text">"Loved the experience! Highly recommended."</p>
                                <p className="review-author">- Jane Smith</p>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="review-submission-form py-3">
                        <h4>Leave a Review</h4>
                        <form>
                        <textarea className="form-control" id="reviewText" rows="3" placeholder="Write your review here..." required></textarea>
                        <button type="button" className="btn btn-primary mt-2 custom-button-sandy" onclick="submitReview()">Submit Review</button>
                        </form>
                    </div>
                </div>
            </section>
                    
            
            <section className="sign-up py-3">
                <hr/>
                <h2>Sign Up for Exclusive Offers</h2>
                <p>Stay updated with our latest products and promotions.</p>
                <button type="button" className="btn btn-primary mt-2 custom-button-sandy" id="signInButton">Sign In / Create Account <Link to="/signin"></Link></button>

            </section>

        </div>
      </div>

     
      <footer className="text-body-secondary py-5 text-center">
        <div className="container">
          <p className="mb-1">&copy; Fernweh Ventures</p>
          <ul className="list-inline">
            <li className="list-inline-item custom-blue"><Link to="/">Home</Link></li>
            <li className="list-inline-item custom-blue"><Link to="/order">Order</Link></li>
            <li className="list-inline-item custom-blue"><Link to="/signin">Sign In</Link></li>
          </ul>
        </div>
      </footer>
      </body>
    </main>
  );
};

export default AboutPage;
