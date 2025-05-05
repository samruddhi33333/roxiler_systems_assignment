import React from 'react';

const StoreCard = ({ store }) => (
  <div>
    <h2>{store.name}</h2>
    <p>Rating: {store.rating}</p>
  </div>
);

export default StoreCard;
