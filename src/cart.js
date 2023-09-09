import React, { useEffect, useState } from "react";
import './cart.css'

const Cart = () => {
    const [cart, changeCart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/cart")
        .then((res) => res.json())
        .then((resp) => {
            changeCart(resp);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, []);
 const removeItem = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Successfully removed from the server, now update the cart state
          changeCart(cart.filter((item) => item.id !== id));
          console.log("Item removed successfully");
        } else {
          console.log("Item not removed");
        }
      })
      .catch((err) => {
        console.error("Error deleting item:", err);
      });
  };
	
    

    return (
        <div className="cart-container">
            {cart.map((item, index) => (
                <div key={index} className="card">
                    <img src={item.imageSrc} alt={item.name} className="card-image" />
                    <div className="card-details">
                        <h2 className="card-title">{item.name}</h2>
                        <p className="card-price">${item.price}</p>
                    </div>
		<button onClick={() => removeItem(item.id)} className="btn btn-danger">Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;