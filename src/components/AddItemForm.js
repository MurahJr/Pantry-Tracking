// src/components/AddItemForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function AddItemForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add item to Firestore
    console.log('Adding item:', { name, quantity });
    setName('');
    setQuantity('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add Item
      </Button>
    </Box>
  );
}

export default AddItemForm;
