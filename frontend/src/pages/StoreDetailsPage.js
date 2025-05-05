import React from 'react';
import { useParams } from 'react-router-dom';
import { getStoreById } from '../services/storeService';
import RatingStars from '../components/RatingStars';

const StoreDetailsPage = () => {
  const { id } = useParams();
  const store = getStoreById(Number(id));

  if (!store) return <p>Store not found.</p>;

  return (
    <div>
      <h2>{store.name}</h2>
      <RatingStars rating={store.rating} />
      <p>Description: {store.description}</p>
    </div>
  );
};

export default StoreDetailsPage;