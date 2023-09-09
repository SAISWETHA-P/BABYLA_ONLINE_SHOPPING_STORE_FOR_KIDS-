
import React from 'react';
import { Link } from 'react-router-dom';


const CheckoutPage = () => {
  // Replace this with your actual cart data and logic
  const cartItems = [
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

  // Calculate the total bill
  const totalBill = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="cart-items">
        <h3>Your Cart</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>
              {item.name} - Quantity: {item.quantity} - Price: {item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="total-bill">
        <h3>Total Bill: Rs.{totalBill.toFixed(2)}</h3>
      </div>
      <Link to="/" className="continue-shopping-button">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutPage;