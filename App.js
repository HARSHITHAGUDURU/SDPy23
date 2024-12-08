import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import Brands1 from  './Components/Brands1';
import Seeds1 from './Components/Seeds1';
import Crop1 from './Components/Crop1';
import Nutrition1 from './Components/Nutrition1';
import Equipments1 from './Components/Equipments1';
import Animal1 from './Components/Animal1';
import Organic1 from './Components/Organic1';
import Services1 from './Components/Services1';
import Knowledge1 from './Components/Knowledge1';
import TrackOrder from './Components/TrackOrder';
import Login from './Components/Login';
import Home from './Components/Home';
import Wishlist from './Components/Wishlist'; // Import Wishlist Component
import WishlistProvider from './Components/WishlistContext';
import ProductList from './Components/ProductList';
import PaymentPage from './Components/PaymentPage';
import Chatbot from './Components/Chatbot';
const App = () => {
  return (
    <WishlistProvider>
      <Router>
        <Navbar1 />
        <Navbar2 />
        <Routes>
          {/* Static Pages */}
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/track-order" element={<TrackOrder />} />
          
          {/* Product Categories Routes */}
          <Route path="/brands1" element={<Brands1 />} />
          <Route path="/seeds" element={<Seeds1 />} />
          <Route path="/crop-protection" element={<Crop1 />} />
          <Route path="/crop-nutrition" element={<Nutrition1 />} />
          <Route path="/equipments" element={<Equipments1 />} />
          <Route path="/animal-husbandry" element={<Animal1 />} />
          <Route path="/organic" element={<Organic1 />} />
          <Route path="/services" element={<Services1 />} />
          <Route path="/knowledge" element={<Knowledge1 />} />
          <Route path="/Chatbot" element={<Chatbot/>} />

          {/* Product & Payment Routes */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/buynow/:productId" element={<PaymentPage />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
};

export default App;
