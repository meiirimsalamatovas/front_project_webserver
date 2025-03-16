


import React, { useState } from "react";

const Cart = ({ cart, removeFromCart }) => {
  const [order, setOrder] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully! Thank you, ${order.name}!`);
    console.log("Order Details:", order);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="item">
            <img src={`/img/${item.image}`} alt={item.name} />
            <h2>{item.name}</h2>
            <b>{item.price}$</b>
            <p>{item.description}</p>
            <div className="add-to-cart" onClick={() => removeFromCart(item)}>Remove</div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <form onSubmit={handleSubmit} className="order-form">
          <h3>Checkout</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={order.name}
            onChange={handleChange}
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={order.email}
            onChange={handleChange}
          />
          
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={order.address}
            onChange={handleChange}
          />
          
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Cart;