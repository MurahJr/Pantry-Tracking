// src/components/Item.js
import React from 'react';
import { motion } from 'framer-motion';

function Item({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{item.name}</h3>
      <p>{item.quantity}</p>
    </motion.div>
  );
}

export default Item;
