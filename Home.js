import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Our Agriculture E-commerce</h1>
    <p>Explore our wide range of seeds and agricultural products.</p>
    <Link to="/products">Shop Now</Link>
  </div>
);

export default Home;
