import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Agriculture E-commerce</p>
      <nav>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/seed-selection">Seed Selection</Link>
      </nav>
    </footer>
  );
};

export default Footer;
