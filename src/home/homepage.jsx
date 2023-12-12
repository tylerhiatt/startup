import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; 

function HomePage() {
  return (
    <body class="homepage d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
            <div>
                <h4 className="float-md-start mb-0" style={{ color: 'white' }}>Fernweh Ventures</h4>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <Link className="nav-link fw-bold py-1 px-0 active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link fw-bold py-1 px-0" to="/about">About</Link>
                    <Link className="nav-link fw-bold py-1 px-0" to="/order">Order</Link>
                    <Link className="nav-link fw-bold py-1 px-0" to="/signin">Sign In</Link>
                </nav>
            </div>
        </header>

        <main className="px-3 pt-3">
            <h1 style={{ color: '#EBEBD3', textShadow: '1px 1px #000' }}>Welcome to Fernweh Ventures</h1>
            <p className="lead" style={{ color: '#EBEBD3', textShadow: '1px 1px #000' }}>
            Your gateway to adventure! At Fernweh Ventures, we've redefined 
            the way you explore the great outdoors. Imagine packing up your 
            sense of wanderlust, your thirst for adventure, and embarking on 
            a journey to uncover the incredible beauty this world has to offer.
            </p>
            <p className="lead">
            <Link to="/about" style={{ color: '#EBEBD3' }} className="btn btn-lg btn-light fw-bold custom-button-sandy">Learn more</Link>
            </p>
        </main>

        <footer className="mt-auto text-white-50 custom-blue">
            <p><a href="https://github.com/tylerhiatt/startup" style={{ textShadow: '1px 1px #000' }}>GitHub Repo</a> by Tyler Hiatt</p>
        </footer>
        </div>
    </body>
  );
}

export default HomePage;
