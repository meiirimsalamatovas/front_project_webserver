import React, { useState } from "react";

const Cart = ({ cart, removeFromCart, updateCartQuantity }) => {
  const [order, setOrder] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [e.target.name]: e.target.value,
    }));
  };

  const handleQuantityChange = (item, action) => {
    if (action === "increase") {
      updateCartQuantity(item, item.quantity + 1); 
    } else if (action === "decrease" && item.quantity > 1) {
      updateCartQuantity(item, item.quantity - 1); 
    }
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
        cart.map((item) => (
          <div key={item.id} className="item">
            <img src={`/img/${item.image}`} alt={item.name} />
            <h2>{item.name}</h2>
            <b>{item.price}$</b>
            <p>{item.description}</p>

            <div className="quantity">
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(item, "decrease")}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(item, "increase")}
              >
                +
              </button>
            </div>

            <div className="remove-from-cart" onClick={() => removeFromCart(item)}>
              Remove
            </div>
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
