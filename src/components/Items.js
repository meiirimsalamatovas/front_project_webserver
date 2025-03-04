import React from 'react';
import Item from './Item';

export default function Items({ items, addToCart }) {  
  return (
    <main>
      {items.map(el => (
        <Item key={el.id} item={el} addToCart={addToCart} /> 
      ))}
    </main>
  );
}
