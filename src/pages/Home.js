// src/pages/Home.js
import React from 'react';
import ItemList from '../components/ItemList';
import AddItemForm from '../components/AddItemForm';

function Home() {
  return (
    <div>
      <h1>Pantry Tracking</h1>
      <AddItemForm />
      <ItemList />
    </div>
  );
}

export default Home;
