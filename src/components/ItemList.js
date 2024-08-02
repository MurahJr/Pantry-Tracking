// src/components/ItemList.js
import React from 'react';
import Item from './Item';

function ItemList() {
  // Mock items for now, replace with data from Firestore
  const items = [
    { id: 1, name: 'Rice', quantity: '2 kg' },
    { id: 2, name: 'Beans', quantity: '1 kg' },
  ];

  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
