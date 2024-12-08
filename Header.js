import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/seed-selection">Seed Selection</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
