import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const addTocart = (item) => {
        const newItem = { ...item };
        fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Item added");
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      };
      
  // Define an array of clothing items
  const clothingItems = [
    {
      id: 1,
      name: 'A toddler thing Infants[Age 0-1]',
      price: 'Rs.598',
      imageSrc: 'Infants.JPG',
    },
    {
      id: 2,
      name: 'Real Basics Girl Night Dress',
      price: 'Rs.499',
      imageSrc: 'girlbaby.jpg',
    },
    {
      id: 3,
      name: 'ARVESA Boy Jean-Top',
      price: 'Rs.454',
      imageSrc: 'boyKid.jpg',
    },
    {
      id: 4,
      name: 'Twinning Girl-Boy Twin Combo',
      price: 'Rs.454',
      imageSrc: 'twincombo.jpg',
    },
    {
      id: 5,
      name: 'Rocks Building-Block',
      price: 'Rs.684',
      imageSrc: 'toy.jpg',
    },
    {
      id: 6,
      name: 'Rocks Building-Block',
      price: 'Rs.999',
      imageSrc: 'footwear.jpg',
    },
    {
      id: 7,
      name: 'Tagas Girl Frog',
      price: 'Rs.569',
      imageSrc: 'girlfrog.jpg',
    },
    {
      id: 8,
      name: 'Momisy Baby Boy Jumpsuit',
      price: 'Rs.949',
      imageSrc: 'boyp.jpg',
    },
  ];

  return (
    <div className="home-page">
      <div className="header">
        <div className="box-container">
          <div className="logo-and-name">
            <div className="logo-container">
              <img src="BABYLALOGO.jpeg" alt="Your Logo" className="logo" />
            </div>
            <h1 className="app-name">BABYLA</h1>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
          <div className="action-icons">
            <a href="/wishlist" className="icon">
              <i className="fas fa-heart"></i>
              <span>Wishlist</span>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/cart'}>cart</Link>
            <a href="/login" className="icon">
              <i className="fas fa-user"></i>
              <span>Login/Register</span>
            </a>
          </div>
          
        </div>
      </div>
      {/* Categories */}
      <div className="categories">
        <a href="/infants" className="category">Infants</a>
        <a href="/baby" className="category">Baby</a>
        <a href="/kids" className="category">Kids</a>
        <a href="/combo" className="category">Twin Combo</a>
        <a href="/toys" className="category">Toys</a>
        <a href="/footwear" className="category">Footwear</a>
      </div>
      {/* Trending Sales Heading */}
      <h2 className="trending-heading">Trending Sales [FLAT 50% OFFER]</h2>
      {/* Clothing Items */}
      <div className="clothing-items">
        {clothingItems.map((item) => (
          <div key={item.id} className="clothing-item">
            <img src={item.imageSrc} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">{item.price}</p>
            <button onClick={() => addTocart(item)} className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Other content for your first page */}
    </div>
  );
};

export default HomePage;