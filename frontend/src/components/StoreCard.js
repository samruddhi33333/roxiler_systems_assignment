import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

const StoreCard = ({ store }) => (
  <div className="store-card">
    <h3>{store.name}</h3>
    <RatingStars rating={store.rating} />
    <Link to={`/store/${store.id}`}>View Details</Link>
  </div>
);

export default StoreCard;