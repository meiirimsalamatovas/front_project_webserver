
import React from "react";
import { FixedSizeList as List } from "react-window";
import Item from './Item';

export default function Items({ items, addToCart, user  }) {
  const itemsPerRow = 3;
  const rowCount = Math.ceil(items.length / itemsPerRow);
  const rowHeight = 620; 

  const renderRow = ({ index, style }) => {
    const startIndex = index * itemsPerRow;
    const rowItems = items.slice(startIndex, startIndex + itemsPerRow);

    return (
      <div style={{ ...style, display: 'flex', gap: '20px', padding: '10px' }}>
        {rowItems.map((item) => (
          <div key={item.id} style={{ flex: 1 }}>
            <Item item={item} addToCart={addToCart} user={user} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="items-container">
      <List
        height={800}
        itemCount={rowCount}
        itemSize={rowHeight}
        width="100%"
      >
        {renderRow}
      </List>
    </main>
  );
}
