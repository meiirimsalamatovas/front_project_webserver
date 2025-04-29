import React from 'react';

export default function Item({ item, addToCart, user }) {
  return (
    <div className="item">
      <img src={`/img/${item.image}`} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      {user && (
        <button className='add-to-cart' onClick={() => addToCart(item)}>+</button>
      )}
    </div>
  );
}
