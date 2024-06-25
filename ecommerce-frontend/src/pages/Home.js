import React from 'react';
import './Home.css';
import AddProduct from './AddProduct';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <nav className="navbar">
          <div className="logo">NOWHERE Solutions</div>
          <ul className="nav-links">
            <li><a href="#product">Product</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#store-locator">Store Locator</a>
            <a href="#login">Login</a>
            <a href="#cart">Cart</a>
          </div>
        </nav>
      </header>

      <section className="featured">
        <div className="featured-text">
          <h1>Featured</h1>
          <h2>Originals Collections</h2>
          <div className="buttons">
            <button>Watch Now</button>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="scroll-down">Scroll</div>
      </section>

      <section className="new-products">
        <h2>New Products</h2>
        <p>Aenean condimentum bibendum laoreet. Praesent gravida dictum nisi ac iaculis. Donec accumsan ex viverra justo commodo.</p>
        <div className="product-list">
          <div className="product">
            <p>DS-2CE70D0T-PTLXTS</p>
            <p>$99.99 | <button>Add to Cart</button></p>
          </div>
          <div className="product">
            <p>DS-2CE70D0T-PTLXTS</p>
            <p>$99.99 | <button>Add to Cart</button></p>
          </div>
          <div className="product">
            <p>DS-2CE70D0T-PTLXTS</p>
            <p>$99.99 | <button>Add to Cart</button></p>
          </div>
        </div>
      </section>

      <section className="featured-beats">
        <h2>Featured Beats</h2>
        {/* Add content here */}
      </section>
      <AddProduct />
    </div>
  );
}

export default Home;
