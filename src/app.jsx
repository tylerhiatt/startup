// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './app.css';

// export default function App() {
//   return <div className='body bg-dark text-light'>App will display here</div>;
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home/homepage';
import AboutPage from './about/aboutpage';
import SigninPage from './signin/sigininpage';
import OrderPage from './order/orderpage';

function App() {
  return (
    // <div>
    //   <HomePage />
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
